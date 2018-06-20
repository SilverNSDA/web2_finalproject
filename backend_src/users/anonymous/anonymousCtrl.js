var router = require('express').Router();
var Repo = require('../../systems/Repository/Repo.js');
var db = require('../../systems/mysql/db.js');
var productsRepo = new Repo('products');
var auctionsRepo = new Repo('auction');
var bidsRepo = new Repo('bid');

router.get('/',(req,res)=>{
	res.render('index');
});

router.get('/top5popular',(req,res)=>{
	var sql = 'select p.*, a.current_price, a.id as auction_id  from `products` p, (select a.*, c.count from `auction` a, (SELECT auction_id, count(id) as count FROM `bid` group by auction_id order by auction_id) c where a.id = c.auction_id) a where a.product_id = p.id order by a.count DESC limit 5';
	db.load(sql)
		.then(rows => {
	        res.json(rows);
	    }).catch(err => {
	        console.log(err);
	        res.statusCode = 500;
	        res.end('View error log on console.');
	    });
});

router.get('/top5highestbid',(req,res)=>{
	var sql = 'select p.*,a.current_price, a.id as auction_id from `products` p, (select a.* from `auction` a order by current_price DESC limit 5)a where p.id = a.product_id';
	db.load(sql)
		.then(rows => {
	        res.json(rows);
	    }).catch(err => {
	        console.log(err);
	        res.statusCode = 500;
	        res.end('View error log on console.');
	    });
});

router.get('/top5ending', (req,res)=>{
	var sql='select p.*,a.current_price, a.id as auction_id from `products` p, (select a.* from `auction` a order by created_date limit 5)a where p.id = a.product_id';
	db.load(sql)
		.then(rows => {
	        res.json(rows);
	    }).catch(err => {
	        console.log(err);
	        res.statusCode = 500;
	        res.end('View error log on console.');
	    });
});

router.get('/search',(req,res)=>{
	let limit = 1;
	var searchStr = req.query.search;
	var page = req.query.page || 1;
	var keys = searchStr.split(" ");
	var upper_limit = limit*(page);
	var lower_limit = limit*(page-1);
	var data_end = false;
	var keys_str ='';
	keys.forEach(e=>{
		keys_str+=String(e)+'|'
	});
	keys_str=keys_str.substr(0,keys_str.length - 1);
	// console.log(limit);
	// console.log(page);
	// console.log(String(lower_limit)+','+String(upper_limit));
	db.load(`select p.*, a.id as auction_id from products p, auctions a where p.id=a.product_id and p.ProName REGEXP '${keys_str}' limit ${String(lower_limit)+','+String(upper_limit)}`)
		.then(rows=>{
			// res.json(rows);
			data_end = (rows.length < limit);
			res.render('search',{searchStr: searchStr, page: page, data: rows, end : data_end});
			
		}).catch(err => {
	        console.log(err);
	        res.statusCode = 500;
	        res.end('View error log on console.');
	    });

	
});



module.exports = router;