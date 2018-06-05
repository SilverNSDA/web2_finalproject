var repo = require('../Repository/Repo.js');
var express = require('express');

class Controller {
	contructor(table, id_col){
		this.router = express.Router();
		this.repo = new repo(table, id_col);
	}

	index(req, res){
		this.repo.loadAll().then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
	        res.statusCode = 500;
	        res.end('View error log on console.');
		});
	}

	show(req, res){
		if(req.params.id){
			var id = req.params.id;

			if (isNaN(id)) {
				res.statusCode = 400;
				res.end();
				return;
			}

			this.repo.load(id).then(rows => {
				if (rows.length > 0) {
					res.json(rows[0]);
				} else {
					res.statusCode = 204;
					res.end();
				}
			}).catch(err => {
				console.log(err);
				res.statusCode = 500;
				res.json('error: '+err);
			});
		}
		else {
			res.statusCode = 400;
			res.json('Id parameter required');
		}
	}

	delete(req, res){
		if (req.params.id) {
			var id = req.params.id;

			if (isNaN(id)) {
				res.statusCode = 400;
				res.end();
				return;
			}

			this.repo.delete(id).then(affectedRows => {
				res.json({
					affectedRows: affectedRows
				});
			}).catch(err => {
				console.log(err);
				res.statusCode = 500;
				res.json('error: '+ err);
			});
		} 
		else {
			res.statusCode = 400;
			res.json('Id parameter required');
		}
	}

	update(req, res){
		if (req.params.id) {
			var id = req.params.id;
			var poco = req.body;

			if (isNaN(id)) {
				res.statusCode = 400;
				res.end();
				return;
			}

			this.repo.update(id,poco).then(affectedRows => {
				res.json({
					affectedRows: affectedRows
				});
			}).catch(err => {
				console.log(err);
				res.statusCode = 500;
				res.json('error: '+err);
			});
		} 
		else {
			res.statusCode = 400;
			res.json('Id parameter required');
		}
	}

	add(req, res){
		this.repo.add(req.body)
		.then(insertId => {
			var poco = {};
			poco[id_col]=insertId;
			for(key in req.body){
				poco[key]=req.body[key];
			}
			res.statusCode = 201;
			res.json(poco);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
	}
}

module.exports.Controller = Controller;