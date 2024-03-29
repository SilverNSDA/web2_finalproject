// const item_card = `<div class="row">
//             <div class="col-lg-4 col-md-6 mb-4">
//               <div class="card h-100">
//                 <a href="#"><img class="card-img-top" src="${item.img_1}" alt="img1">
//                 <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
//             <ol class="carousel-indicators">
//               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

//             </ol>
//             <div class="carousel-inner" role="listbox">
//               <div class="carousel-item active">
//                 <img class="d-block img-fluid" src="${item.img_2}" alt="img2">
//               </div>
//               <div class="carousel-item">
//                 <img class="d-block img-fluid" src="${item.img_3}" alt="img3">
//               </div>

//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div></a>
//                 <div class="card-body">
//                   <h4 class="card-title">
//                     <a href="#">${item.ProName} </a>
//                   </h4>
//                   <h5>${item.current_price} $</h5>
//                   <p class="card-text">${item.Description}</p>
//                 </div>
//                 <div class="card-footer">
//                   <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//                 </div>
//               </div>
//             </div>

//           </div>`;
var popular = function(){
	$.ajax({
		url: 'http://localhost:3000/top5popular',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		// console.log(data);
		$('#show').empty();
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
                    <a href="/client/bid/${item.auction_id}">${item.ProName} </a>
                  </h4>
                  <h5>$${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

          </div>`
            $('#show').append(card);
            // $('#show').append(item_card);
		});
    // var item = {
    //   ProName: x,
    //   current_price: 10,
    //   Description: abc 
    // };
    // $('#show').append(item_card);
	});
}

var highest_bid = function(){
	$.ajax({
		url: 'http://localhost:3000/top5highestbid',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		// console.log(data);
		$('#show').empty();
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
                    <a href="/client/bid/${item.auction_id}">${item.ProName} </a>
                  </h4>
                  <h5>$${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

          </div>`
            $('#show').append(card);
            // $('#show').append(item_card);
		});
	});
}
var ending = function(){
	$.ajax({
		url: 'http://localhost:3000/top5ending',
		dataType: 'json',
		timeout: 100000
	}).done(data=>{
		// console.log(data);
		$('#show').empty();
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
                    <a href="/client/bid/${item.auction_id}">${item.ProName} </a>
                  </h4>
                  <h5>$${item.current_price}</h5>
                  <p class="card-text">${item.Description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

          </div>`
            $('#show').append(card);
            // $('#show').append(item_card);
		});
	});
}



window.onload = popular;
$('#popular').on('click', popular);
$('#highest_bid').on('click', highest_bid);
$('#ending').on('click',ending)
