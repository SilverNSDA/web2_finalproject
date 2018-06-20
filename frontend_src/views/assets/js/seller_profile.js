var products_list = function(){
	$.ajax({
		url:'http://localhost:3000/seller/products_list',
		dataType:'json',
		timeout: 10000
	}).done(data=>{
		$('#action_show').empty();
		$.each(data, (idx,item)=>{

		var card = `<div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${item.img_1}" alt="img1">
            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="${item.img_2}" alt="img2">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="${item.img_3}" alt="img3">
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">${item.ProName} </a>
              </h4>
              <h5>Current bid: ${item.current_price || ''}$ </h5>
              <p class="card-text">${item.Description}</p>
            </div>
            <div class="card-footer">
              <a href="./newauction?id=${item.id}">Create auction</a>
            </div>
          </div>
        </div>

      </div>`
        $('#action_show').append(card);

		});
	});
}

var auctions_list = function(){
	$.ajax({
		url:'http://localhost:3000/seller/auctions_list',
		dataType:'json',
		timeout: 10000
	}).done(data=>{
		$('#action_show').empty();
		$.each(data, (idx,item)=>{

		var card = `<div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${item.img_1}" alt="img1">
            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="${item.img_2}" alt="img2">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="${item.img_3}" alt="img3">
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">${item.ProName} </a>
              </h4>
              <h5>${item.current_price || ''}</h5>
              <p class="card-text">${item.Description}</p>
            </div>
            <div class="card-footer">
              <p><small> Start date: ${item.created_date}</small></p>
              <p><small> End date: ${item.end_date}</small></p>
              <p><a href="./log/${item.auction_id}">See log </a></p>
            </div>
          </div>
        </div>

      </div>`
        $('#action_show').append(card);

		});
	});
}



$('#products_list').on('click',products_list);
$('#auctions_list').on('click',auctions_list);