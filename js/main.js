$(document).ready(function() {
  let cartList = document.getElementById('cartList');
  let minicart = document.getElementById('minicart');
  render();
  minicartRender(minicart);
  $(document).on('click', '.add-to-cart', function(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    let product = {
      id,
      info: products.find((product) => product.id == id),
      quantity: parseInt($(`#quantityProductList-${id}`)[0].value),
    };
    let cart = getCart();
    cart.push(product);
    setCart(cart);
    minicartRender(minicart);
    render();
  });

  $(document).on('click', '.view-cart', function(event) {
    event.preventDefault();
    shoppingCart(cartList, getCart());
    $('#exampleModalLong').modal('show');
  });

  $(document).on('click', '.check-out', function(event) {
    event.preventDefault();
    shoppingCart(cartList, getCart());
    $('#exampleModalLong').modal('show');
  });

  $(document).on('click', '.remove', function(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    let cart = getCart();
    cart = cart.filter((c) => c.id !== id);
    setCart(cart);
    shoppingCart(cartList, cart);
    minicartRender(minicart);
    render();
  });

  $(document).on('change', '.changeQuantity', function(event) {
    let cart = getCart();
    let index = cart.findIndex(
      (product) => product.id == event.target.dataset.id
    );
    cart[index].quantity = event.target.value;
    shoppingCart(cartList, cart);
  });

  $('#placeOrder').on('click', function(event) {
    event.preventDefault();

    if (event.target.dataset.empty == 'true') {
      setCart([]);
    }
    minicartRender(minicart);
    render();
    $('#exampleModalLong').modal('hide');
  });

  $(document).on('click', '.buy', function(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    let tempCart = [
      {
        id,
        info: products.find((product) => product.id == id),
        quantity: 1,
      },
    ];
    shoppingCart(cartList, tempCart, false);
    $('#exampleModalLong').modal('show');
  });
});

function render() {
  let productList = document.getElementById('productList');
  productList.innerHTML = '';
  for (const product of products) {
    let article = document.createElement('article');
    article.classList.add('card', 'card-product');
    article.innerHTML = productListing(product);
    productList.append(article);
  }
}
