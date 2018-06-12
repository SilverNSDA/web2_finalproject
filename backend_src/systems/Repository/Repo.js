var mysql_db = require('../mysql/db.js');

class Repo {
	constructor(table, id_col = "id"){
		this.table = table;
		this.id_col = id_col;
	}

	// loadCustom(sql){
	// 	return mysql_db.load(sql);
	// }

	loadAll(options ={}){
		var default_options = {
			order_by: this.id_col,
			order : '',
			limit : 0
		};
		if(!("order_by" in options)){
			options.order_by = default_options.order_by;
		}
		if(!("order" in options)){
			options.order = default_options.order;
		}
		if(!("limit" in options)){
			options.limit = default_options.limit;
		}
		var str = options.limit==0?'':`limit ${options.limit}`;
		var sql = `select * from ${this.table} order by ${options.order_by} ${options.order} ${str}`;
		// console.log(sql);
		return mysql_db.load(sql);
	}

	loadCol(col, vals, options ={}){
		var default_options = {
			order_by: this.id_col,
			order : '',
			limit : 0
		};
		if(!("order_by" in options)){
			options.order_by = default_options.order_by;
		}
		if(!("order" in options)){
			options.order = default_options.order;
		}
		if(!("limit" in options)){
			options.limit = default_options.limit;
		}
		var valsStr = '';
		vals.forEach(e=>{
			valsStr+=''+String(e)+'|';
		});
		valsStr = valsStr.substr(0, valsStr.length-1);

		var str = options.limit==0?'':`limit ${options.limit}`;
		var sql = `select * from ${this.table} where ${col} REGEXP '${valsStr}' order by ${options.order_by} ${options.order} ${str}`;
		return mysql_db.load(sql);
	}

	loadCount(count_col, group_by,  options ={}){
		var default_options = {
			order_by: group_by,
			order : '',
			limit : 0
		};
		if(!("order_by" in options)){
			options.order_by = default_options.order_by;
		}
		if(!("order" in options)){
			options.order = default_options.order;
		}
		if(!("limit" in options)){
			options.limit = default_options.limit;
		}
		var str = options.limit==0?'':`limit ${options.limit}`;
		var sql = `select ${group_by}, count(${count_col})  as count from ${this.table} group by ${group_by} order by ${options.order_by} ${options.order} ${str}`
		// console.log(sql);
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
		for(var key in vals){
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
		for(var key in vals){
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