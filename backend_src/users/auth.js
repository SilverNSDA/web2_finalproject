var repo = require('../systems/Repository/Repo.js');
var bcrypt = require('bcryptjs')

var usersRepo = new repo('users');

exports.register = function(req, res){
	var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var pass;
	console.log(req.body);
	if(!(req.body.password === req.body.passConf)){
		req.flash('error', 'Comfirm password not match');
		res.redirect('/register');
		return;
	}
	var users={
	    "username":req.body.username,
	    "email":req.body.email,
	    "password":bcrypt.hashSync(req.body.password,10),
	    "hoten":req.body.hoten,
	    "diachi":req.body.diachi,
	    "role":req.body.role, // role: 0 = admins, 1 = seller, 2 = client
	    "created_date":today,
	    "last_modified_date":today
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
  			// res.json(poco);
  			res.redirect('/');
  		})
  		.catch(err=>{
  			console.log(err);
			res.statusCode = 500;
			res.end();
  		});
}

exports.login = function(req, res){
	var username = req.body.username || '';
	var password = req.body.password || '';
	usersRepo.loadCol('username',username)
		.then(rows => {
			if(rows.length == 0){
				// res.send({
				// 	"code":204,
				// 	"success":"Username not exist"
				// });
				req.flash('error',"Username not exist");
				res.redirect('/login');
			}
			else{
				var row = rows[0];
				if(bcrypt.compareSync(password, row.password)){
					var r = row.role;
					req.session.user = {
						id: row.id,
						name: row.username,
						role: r==0? "admin": (r==1? "seller":"client")

					};
					// res.send({
					// 	"code": 200,
					// 	"success":'Login successfully'
					// });
					req.flash("success",'Login successfully');
					res.redirect('/');
				}
				else{
					// res.send({
					// 	"code":204,
					// 	"success":'Password mismatch'
					// });
					req.flash("error",'Password mismatch');
					res.redirect('/login');					
				}
			}
		})
		.catch(err=>{
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
}

exports.logout = function(req,res){
	delete req.session.user;
	res.redirect('/');
}