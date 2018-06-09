var mysql_db = require('../mysql/db.js');

class Repo {
	constructor(table, id_col = "id"){
		this.table = table;
		this.id_col = id_col;
	}

	loadAll(order_by = this.id_col, order ='', limit = 0){
		var str = limit==0?'':`limit ${limit}`;
		var sql = `select * from ${this.table} order by ${order_by} ${order} ${str}`;
		return mysql_db.load(sql);
	}

	loadCol(col, val, order_by = this.id_col, order ='', limit = 0){
		var str = limit==0?'':`limit ${limit}`;
		var sql = `select * from ${this.table} where ${col} = '${val}' order by ${order_by} ${order} ${str}`;
		return mysql_db.load(sql);
	}

	load(id){
		var sql = `select * from ${this.table} where ${this.id_col} = ${id}`;
		return mysql_db.load(sql);
	}

	delete(id){
		var sql = `delete from ${this.table} where ${this.id_col} = ${id}`;
		return mysql_db.delete(sql);
	}

	add(vals){
		var col_name = '';
		var col_val = '';
		for(key in vals){
			if(key!=undefined){
				col_name+=`${key},`;
				col_val+=`'${vals[key]}',`;
			}
		}
		col_name = col_name.substr(0,col_name.length - 1);
		col_val = col_val.substr(0,col_val.length - 1);
		var sql = `insert into ${this.table}(${col_name}) value (${col_val})`;
		return mysql_db.insert(sql);
	}

	update(id, vals){
		var pro = '';
		for(key in vals){
			if(key!=undefined){
				pro += `${key} = '${vals[key]},'`;
			}
		}
		pro = pro.substr(0,pro.length - 1);
		var sql = `update ${this.table} set ${pro} where ${this.id_col} = ${id}`;
		return mysql_db.update(sql);
	}
}

module.exports = Repo;