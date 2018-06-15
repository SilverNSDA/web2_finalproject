var repo = require('../systems/Repository/Repo.js');
var productRepo = new repo('products');
var path = require('path');
// var bcrypt = require('bcryptjs');

const img_format = ['jpg','png','gif','jpeg','tif','webp']; //accept file extension
var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb)=>{
		cb(null,path.resolve(__dirname+'/../storage/imgs'));
	},
	filename: (req, file, cb)=>{
		var ext = path.extname(file.originalname);
		// console.log(ext);
		cb(null,Date.now()+file.fieldname+ ext);	
	}
});
var img = multer({
	storage: storage,
	fileFiter: (req, file, cb)=>{
		var ext = path.extname(file.originalname).toLowerCap();
		// console.log(ext);
		if(!(ext in img_format)){
			return cb(new Error(ext+' is not supported file type'));
		}
		cb(null, true);
	}
});
// var resizer = require('multer-resizer');
// var imgages = new resizer({
// 	multer: img,
// 	task:{
// 		resize:{
// 			width:250,
// 			height:150,
// 			suffix:'img'
// 		}
// 	}
// });
var imgUpload = img.fields([
	{name:'img_1', maxCount:1},
	{name:'img_2',maxCount:2},
	{name:'img_3',maxcount:3}
]);


var router = require('express').Router();

router.get('/newproduct',(req,res)=>{
	res.render('newproduct');
});
router.post('/newproduct',(req,res)=>{
	imgUpload(req,res, err=>{
		if(err){
			console.log(JSON.stringify(err));
			res.statusCode = 400;
			res.send('Fail to save images')
		}
		else {
			// console.log(req.files);
			// console.log(res.req.files.img_1[0].originalname.extension);
			var img1 = res.req.files.img_1[0].filename;
			var img2 = res.req.files.img_2[0].filename;
			var img3 = res.req.files.img_3[0].filename;
			var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
			// console.log(req.body);
			var products = {
				ProName: req.body.proname,
				img_1: './imgs/'+img1,
				img_2: './imgs/'+img2,
				img_3: './imgs/'+img3,
				seller: req.session.user.id,
				Description: req.body.description,
				created_date: today
			};
			// console.log(products);
			productRepo.add(products)
				.then(insertID =>{
					res.statusCode = 200;
					res.send('products '+insertID);
				})
				.catch(err=>{
					console.log(err);
					res.statusCode = 500;
					res.end();
				});
		}
	});
	
});


module.exports = router;