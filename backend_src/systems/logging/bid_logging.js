//[hh:mm:ss dd/mm/yyy] auction_id: xxx   bidder_id:xxxx  bidder_name    bid_price:xxxxxx     new_current_price:xxxxxx    highest_bid_id:xxxxx

var fs = require('fs');
var path = require('path');
var callsite = require('callsite');

exports.log = function(str, log_path){
	var log = '';
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    log+=(`[${datetime}] ${str}`);
    if(!path.isAbsolute(log_path)){
    	var stack = callsite();
    	log_path = path.resolve(path.dirname(stack[1].getFileName())+log_path);
    }
    if(!fs.existsSync(path.dirname(log_path))){
        fs.mkdirSync(path.dirname(log_path));
    }
    fs.appendFile(log_path, log, err=>{if(err) console.log(err);});
    // console.log(log);
    // console.log(log_path);
}

exports.getLog = function(log_path){
	// if(!path.isAbsolute(log_path)){
 //    	var stack = callsite();
 //    	log_path = path.resolve(path.dirname(stack[1].getFileName())+'/'+log_path);
 //    }

    return fs.readFileSync(log_path,"utf8");
}