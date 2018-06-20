//List of action:
//view self's products list
//product detail 
//add new product
//create an auction


var router = require('express').Router();
var Repo = require('../../systems/Repository/Repo.js');
var db = require('../../systems/mysql/db.js');
var productsRepo = new Repo('products');
var auctionsRepo = new Repo('auction');
var bidsRepo = new Repo('bid');
var path = require('path');
// var bcrypt = require('bcryptjs');
var hash = require('object-hash');
var log = require('../../systems/logging/bid_logging.js')


router.use((req,res,next)=>{	
	if(res.locals.user.role!=1){
		res.statusCod=401;
		res.redirect('/')
	}
	else{
		next();
	}
});


const img_format = ['jpg','png','gif','jpeg','tif','webp']; //accept file extension
var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb)=>{
		cb(null,path.resolve(__dirname+'/../../storage/imgs'));
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

router.get('/newproduct',(req,res)=>{
	res.render('users/seller/newproduct');
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
				img_1: '/imgs/'+img1,
				img_2: '/imgs/'+img2,
				img_3: '/imgs/'+img3,
				seller: req.session.user.id,
				Description: req.body.description,
				created_date: today
			};
			// console.log(products);
			productsRepo.add(products)
				.then(insertID =>{
					res.statusCode = 200;
					res.redirect('/user/profile');
				})
				.catch(err=>{
					console.log(err);
					res.statusCode = 500;
					res.end();
				});
		}
	});
	
});


router.get('/products_list',(req,res)=>{
	var id = res.locals.user.id;
	productsRepo.loadCol('seller',id)
		.then(rows=>{
			res.statusCode=200;
			res.json(rows);
		})
		.catch(err=>{
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});

router.get('/newauction',(req,res)=>{
	var id = req.query.id;
	productsRepo.load(id)
		.then(rows=>{
			res.render('users/seller/newauction', {pro: rows[0]});
		})
		.catch(err=>{
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});
router.post('/newauction',(req,res)=>{
	var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var end_date = new Date();
	end_date.setDate(end_date.getDate()+7); //7 days
	end_date = end_date.toISOString().slice(0, 19).replace('T', ' ');
	var auction ={
		seller: req.body.seller,
		product_id: req.body.pro_id,
		created_date: today,
		start_price: req.body.start_price,
		price_step: req.body.price_step,
		instant_buyout: req.body.instant_buyout,
		current_price: req.body.start_price,
		end_date: end_date
	};
	auction.log_path = 'storage/logs/'+String(req.body.seller)+'/'+hash.MD5(auction)+'.txt';

	auctionsRepo.add(auction)
		.then(insertID=>{
			res.statusCode = 201;
			log.log(`Auction created. Auction start at ${auction.created_date} end at ${auction.end_date}`,path.resolve(__dirname+`/../../storage/${auction.log_path}`));
			res.redirect('/seller/profile');
		})
		.catch(err=>{
			console.log(err);
			res.statusCode =500;
			res.end();
		})
});

router.get('/auctions_list',(req,res)=>{
	var id = res.locals.user.id;
	db.load(`SELECT p.*, a.id as auction_id, a.created_date, a.end_date, a.current_price FROM auction a left JOIN products p On a.product_id=p.id and a.seller=p.seller`)
		.then(rows=>{
			res.statusCode=200;
			res.json(rows);
		})
		.catch(err=>{
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});

router.get('/log/:id',(req,res)=>{
	// console.log(req.params);
	var a_id = req.params.id;
	auctionsRepo.load(a_id)
		.then(rows=>{

			var log_path = rows[0].log_path;
			res.json(log.getLog(log_path));
		})
		.catch(err=>{
			res.statusCode=404;
			console.log(err);
			res.send('Log not found');
		})
});


router.get('/profile', (req,res)=>{
	res.render('users/seller_profile');
});

//blacklist
var blacklistRepo = new Repo('auction_blacklist');
var usersRepo = newRepo('users');
var update_current_price = function(row){
	var price = row.current_price;
	bidsRepo.loadCol('auction_id',row.id,{orderBy:price, order:'DESC',limit:2})
		.then(rows=>{
			price = rows[1].current_price+row.price_step;
		})
		.then(()=>{
			auctionsRepo.update(row.id,{current_price:price});
		})
		.catch(err=>{console.log(err);});
}
router.post('/addblacklist',(req,res)=>{
	var ban_name = rq.body.ban_name;
	usersRepo.loadCol('username',ban_name)
		.then(rows=>{
			var ban = {
				seller_id: req.session.user.id,
				ban_id: rows[0].id
			}
			if(rows[0].role!=2){
				req.flash('error','It must be a client to be ban');
				res.redirect(req.get('referer'));
			}
			else{
				await Promise.all([
				// delete all bidding records of that client
				db.delete(`delete from bid where bidder='${ban.ban_id}' and auction_id in (select id from auction where seller="${ban.seller_id}") `),
				//add ban to blacklist
				blacklistRepo.add(ban)
				])
				.catch(err=>{
					console.log(err);
				});
				//update current_price
				auctionsRepo.loadCol('seller',ban.seller_id)
					.then(rows=>{
						for(var i in rows){
							update_current_price(rows[i]);
						}
					})
					.catch(err=>{console.log(err);})

			}
		})
		.catch(err=>{
			res.statusCode=500;
			console.log(err);
			res.flash('error',err);
			res.redirect(req.get('referer'));
		});
	// res.redirect(req.get('referer'));
	
});

module.exports = router;