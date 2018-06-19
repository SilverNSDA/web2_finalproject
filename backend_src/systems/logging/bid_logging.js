//[hh:mm:ss dd/mm/yyy] auction_id: xxx   bidder_id:xxxx  bidder_name    bid_price:xxxxxx     new_current_price:xxxxxx    highest_bid_id:xxxxx

var fs = require('fs');
var path = require('path');
var callsite = require('callsite');

exports.log = function(str, log_path){
	var log = '';
	var currentdate = new Date(); 
	var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    log.append(`[${datetime}] ${str} \n`);
    if(!path.isAbsolute(log_path)){
    	var stack = callsite();
    	log_path = path.resolve(path.dirname(stack[1].getFileName())+log_path);
    }

    fs.appendFile(log_path, log, err=>{if(err) console.log(err);});
}