var router = require('express').Router();
var productsRepo = require('../systems/Repository/Repo.js')('products');

router.get('/',(req,res)=>{
	productsRepo.loadAll()


	res.render('index');
});



module.exports = router;