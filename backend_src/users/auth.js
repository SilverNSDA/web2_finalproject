var repo = require('../system/Reposity/Repo.js');
var bcrypt = require('bcryptjs')

var usersRepo = new repo('users');

exports.register = function(req, res){
	var today = new Date();
	var users={
	    "username":req.body.username,
	    "email":req.body.email,
	    "password":bcrypt.hashSync(req.body.password,10),
	    "hoten":req.body.hoten,
	    "diachi":req.body.diachi,
	    "role":req.body.role, // role: 0 = admins, 1 = seller, 2 = client
	    "created":today,
	    "modified":today
  	}

  	usersRepo.add(users)
  		.then(insertID => {
  			var r = req.body.role;
  			var poco = {
  				"id":insertID,
  				"username":req.body.username,
  				"email": req.body.email,
  				"role": r==0? "Administrator": (r==1? "Seller":"Client")
  			}
  			res.statusCode = 200;
  			res.json(poco);
  		})
  		.cacth(err=>{
  			console.log(err);
			res.statusCode = 500;
			res.end();
  		});
}

exports.login = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	usersRepo.LoadCol('username',username)
		.then(rows => {
			if(rows.length == 0){
				res.send({
					"code":204,
					"success":"Username not exist"
				});
			}
			else{
				var row = rows[0];
				if(bcrypt.compareSync(password, row.password)){
					res.send({
						"code": 200,
						"success":'Login successfully'
					});
				}
				else{
					res.send({
						"code":204,
						"success":'Password mismatch'
					});
				}
			}
		})
		.cathc(err=>{
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
}