var router = require('express').Router();
var auth = require('./auth.js');
// function checkAuth(req, res, next){
// 	if(req.session.user.id == ''){
// 		res.send('Please log in to view this page');
// 	}
// 	else{
// 		next();
// 	}
// }

router.post('/login',auth.login);
router.get('/login',(req, res)=>{
	res.render('login');
});

router.get('/logout',auth.logout);

router.get('/register',(req,res)=>{
	res.render('register',{flash: {success: req.flash('success'),
									error:req.flash('error'),
									warning:req.flash('warning'),
									info:req.flash('info')
									}
								});
});
router.post('/register',auth.register);

// exports.checkAuth = checkAuth;
module.exports = router;