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
    cart.push(product);
    minicartRender(minicart);
    render();
  });

  $(document).on('click', '.view-cart', function(event) {
    event.preventDefault();
    shoppingCart(cartList, cart);
    $('#exampleModalLong').modal('show');
  });

  $(document).on('click', '.remove', function(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    cart = cart.filter((c) => c.id !== id);
    shoppingCart(cartList, cart);
    minicartRender(minicart);
    render();
  });

  $(document).on('change', '.changeQuantity', function(event) {
    let index = cart.findIndex(
      (product) => product.id == event.target.dataset.id
    );
    cart[index].quantity = event.target.value;
    shoppingCart(cartList, cart);
  });

  $('#placeOrder').on('click', function(event) {
    event.preventDefault();
    cart = [];
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
    shoppingCart(cartList, tempCart);
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
