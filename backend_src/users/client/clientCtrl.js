var router= require('express').Router();
var db = require('../../systems/mysql/db.js');
var Repo = require('../../systems/Repository/Repo.js');
var auctionsRepo = new Repo('auction');
var bidsRepo = new Repo('bid');

router.use((req,res,next)=>{	
	if(res.locals.user.role!=2){
		res.statusCod=401;
		res.redirect('/')
	}
	else{
		next();
	}
});

router.get('/profile',(req,res)=>{
	res.send('It\'s sad to see this' );
});

router.get('/bid/:id',(req,res)=>{
	var auction_id = req.params.id;
	db.load(`select p.*, a.id as auction_id, a.price_step, a.instant_buyout from products p, auction a where p.id=a.product_id and a.id=${auction_id}`)
		.then(rows=>{
			res.render('users/client/bid',{item: rows[0]});
		})
		.catch(err=>{
			console.log(err);
		})
});

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

router.post('/bid/:id',(req,res)=>{
	var auction_id = req.params.id;
	var price = req.body.price;
	var bid ={
		auction_id: auction_id,
		price: price,
		bidder: req.session.user.id
	};
	//check price
	auctionsRepo.load(auction_id)
		.then(rows=>{
			var row =rows[0];
			var buyout_threshold = row.instant_buyout==0? true : bid.price<row.instant_buyout;
			var check = bid.price>row.current_price && ((bid.price-row.current_price)%row.price_step)==0 && buyout_threshold;
			if(check){
				//bid
				bidsRepo.add(bid)
					.then(()=>{
						update_current_price(row);
						req.flash('success','Bid success');
						res.redirect('/');
					})
					.catch(err=>{console.log(err);});
			}
			else{
				//error
				req.flash('error','Invalid price');
				res.redirect(req.get('referer'));
			}
		})
		.catch(err=>{
			req.flash('error',err);
			res.redirect(req.get('referer'));
		});
});

module.exports = router;