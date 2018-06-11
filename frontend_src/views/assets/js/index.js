
var popular = function(){
	$.ajax({
		url: 'http://localhost:3000/top5popular',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		console.log(data);
		$('#show').empty();
		$.each(data, (idx,item)=>{
			var card = `<div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="http://placehold.it/700x400"></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${item.ProName}</a>
                  </h4>
                  <h5>${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>`
            $('#show').append(card);
		});
	});
}

var highest_bid = function(){
	$.ajax({
		url: 'http://localhost:3000/top5highestbid',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		console.log(data);
		$('#show').empty();
		$.each(data, (idx,item)=>{
			var card = `<div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="http://placehold.it/700x400"></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${item.ProName}</a>
                  </h4>
                  <h5>${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>`
            $('#show').append(card);
		});
	});
}
var ending = function(){
	$.ajax({
		url: 'http://localhost:3000/top5ending',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		console.log(data);
		$('#show').empty();
		$.each(data, (idx,item)=>{
			var card = `<div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="http://placehold.it/700x400"></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${item.ProName}</a>
                  </h4>
                  <h5>${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>`
            $('#show').append(card);
		});
	});
}


window.onload = popular;
$('#popular').on('click', popular);
$('#highest_bid').on('click', highest_bid);
$('#ending').on('click',ending)