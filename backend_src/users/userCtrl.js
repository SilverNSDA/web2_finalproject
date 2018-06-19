var router = require('express').Router();
// var Repo = require('../systems/Repository/Repo.js');
// var db = require('../systems/mysql/db.js');
// var productsRepo = new Repo('products');
// var auctionsRepo = new Repo('auction');
// var bidsRepo = new Repo('bid');


router.get('/profile', (req,res)=>{
	if(res.locals.user.id == ''){
		res.redirect('/login');
	}else{
		if(res.locals.user.role == 0){
			res.redirect('/admin/profile');
			// res.render('users/admin_profiles');
		}
		if(res.locals.user.role == 1){
			res.redirect('/seller/profile');
			// res.render('users/seller_profiles');
		}
		if(res.locals.user.role == 2){
			res.redirect('/client/profile');
			// res.render('users/client_profiles');
		}
	}
});

module.exports = router;