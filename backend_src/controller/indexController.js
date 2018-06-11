var router = require('express').Router();
var Repo = require('../systems/Repository/Repo.js');
var db = require('../systems/mysql/db.js');
var productsRepo = new Repo('products');
var auctionsRepo = new Repo('auction');
var bidsRepo = new Repo('bid');

router.get('/',(req,res)=>{
	res.render('index');
});

router.get('/top5popular',(req,res)=>{
	var sql = 'select * from `products` p, (select * from `auction` a, (SELECT auction_id, count(id) as count FROM `bid` group by auction_id order by auction_id) c where a.id = c.auction_id) a where a.product_id = p.id order by a.count DESC limit 5';
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
	var sql = 'select * from `products` p, (select * from `auction` order by current_price DESC limit 5)a where p.id = a.product_id';
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
	var sql='select * from `products` p, (select * from `auction` order by created_date limit 5)a where p.id = a.product_id';
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
	var searchStr = req.query.search;
	res.render('search',{searchStr: searchStr});
});



module.exports = router;