var router = require('express').Router();
// var Repo = require('../systems/Repository/Repo.js');
// var db = require('../systems/mysql/db.js');
// var productsRepo = new Repo('products');
// var auctionsRepo = new Repo('auction');
// var bidsRepo = new Repo('bid');


router.get('/profile', (req,res)=>{
	console.log(res.locals.user);
	if(res.locals.user.id == ''){
		res.redirect('/login');
		// console.log("in");
	}else{
		if(res.locals.user.role == 0){
			res.redirect('/admin/profile');
			// res.render('users/admin_profile');
			// console.log("in");
		}
		if(res.locals.user.role == 1){
			res.redirect('/seller/profile');
			// res.render('users/seller_profile');
			// console.log("in");
		}
		if(res.locals.user.role == 2){
			res.redirect('/client/profile');
			// res.render('users/client_profile');
			// console.log("in");
		}

	}
});

module.exports = router;