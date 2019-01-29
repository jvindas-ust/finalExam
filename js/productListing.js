function productListing(product) {
  return `<div class="card-body">
        <div class="row">
            <aside class="col-sm-3">
                <div class="img-wrap"><img src="${product.image}" /></div>
            </aside>
            <!-- col.// -->
            <article class="col-sm-6">
                <h4 class="title">${product.name}</h4>
                <div class="rating-wrap  mb-2">
                    <ul class="rating-stars">
                        <li style="width:${
                          product.rating
                        }%" class="stars-active">
                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>
                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </li>
                    </ul>
                    <div class="label-rating">${product.reviews} reviews</div>
                    <div class="label-rating">${product.orders} orders</div>
                </div>
                <!-- rating-wrap.// -->
                <p>
                    ${product.description}
                </p>
                <dl class="dlist-align">
                    <dt>Color</dt>
                    <dd>${product.colors}</dd>
                </dl>
                <!-- item-property-hor .// -->
                <dl class="dlist-align">
                    <dt>Material</dt>
                    <dd>${product.material}</dd>
                </dl>
                <!-- item-property-hor .// -->
            </article>
            <!-- col.// -->
            <aside class="col-sm-3 border-left">
                <div class="action-wrap">
                    <div class="price-wrap h4"><span class="price"> $${
                      product.price
                    } </span> <del class="price-old"> $${
    product.originalPrice
  }</del></div>
                    <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br />
                    <dl class="dlist-inline">
			  <dt>Quantity: </dt>
			  <dd> 
			  	<select class="form-control form-control-sm" style="width:70px;">
			  		<option> 1 </option>
			  		<option> 2 </option>
                    <option> 3 </option>
                    <option> 3 </option>
			  	</select>
			  </dd>
			</dl>
                    <p><a href="#" class="btn btn-primary"> Buy </a>
                    <a href="#" class="btn  btn-outline-primary add-to-cart" data-id=${
                      product.id
                    }> <i class="fas fa-shopping-cart"></i> Add to cart </a>
                    </p>
                    <a href="#"><i class="fa fa-heart"></i> Add to wishlist</a>
                </div>
                <!-- action-wrap.// -->
            </aside>
            <!-- col.// -->
        </div>
        <!-- row.// -->
    </div>
    <!-- card-body .// -->`;
}
