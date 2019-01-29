function shoppingCart(elem, cart) {
  let subtotal = 0;
  for (const product of cart) {
    let tr = document.createElement('tr');
    let price = product.info.price * product.quantity;
    tr.innerHTML = cartProduct(product, price);
    elem.append(tr);
    subtotal += price;
  }
  subtotal = subtotal.toFixed(2);
  let discount = (subtotal * 0.05).toFixed(2);
  let total = (subtotal - discount).toFixed(2);

  $('#subtotal').text(subtotal);
  $('#discount').text(discount);
  $('#total').text(total);

  return '';
}

function cartProduct(cartItem, price) {
  let product = cartItem.info;
  return `
    <td>
        <figure class="media">
            <div class="img-wrap"><img src="${
              product.image
            }" class="img-thumbnail img-sm" /></div>
            <figcaption class="media-body">
                <h6 class="title text-truncate">${product.name}</h6>
                <dl class="dlist-inline small">
                    <dt>Description:</dt>
                    <dd>${product.description}</dd>
                </dl>
                <dl class="dlist-inline small">
                    <dt>Color:</dt>
                    <dd>${product.colors}</dd>
                </dl>
            </figcaption>
        </figure>
    </td>
    <td>
        <select class="form-control">
            <option ${cartItem.quantity == 1 ? 'selected' : ''}>1</option>
            <option ${cartItem.quantity == 2 ? 'selected' : ''}>2</option>
            <option ${cartItem.quantity == 3 ? 'selected' : ''}>3</option>
            <option ${cartItem.quantity == 4 ? 'selected' : ''}>4</option>
        </select>
    </td>
    <td>
        <div class="price-wrap"><var class="price">USD ${price}</var> <small class="text-muted">(USD ${
    product.price
  } each)</small></div>
        <!-- price-wrap .// -->
    </td>
    <td class="text-right">
        <a
            data-original-title="Save to Wishlist"
            title=""
            href=""
            class="btn btn-outline-success"
            data-toggle="tooltip"
        >
            <i class="fa fa-heart"></i
        ></a>
        <a href="" class="btn btn-outline-danger"> × Remove</a>
    </td>`;
}
