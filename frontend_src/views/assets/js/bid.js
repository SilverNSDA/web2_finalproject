var check_price = function(){
	var price = $('#price').val();
	var step = $('#step').val();
	var buyout=$('#buyout').val();
	var buyout_threshold = buyout==0? true : bid.price<buyout;
	var curr = $('#curr').val();
	return price>curr && ((price-curr)%step==0) && buyout_threshold;
}

$('#price').on('change input',function(){
	if(check_price()){
		$('form>button[type=submit]').prop('disabled',false);
	}
	else{
		$('form>button[type=submit]').prop('disabled',true);
	}
});

