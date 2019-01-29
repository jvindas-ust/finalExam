$(document).ready(function() {
  let productList = document.getElementById('productList');
  for (const product of products) {
    let article = document.createElement('article');
    article.classList.add('card', 'card-product');
    article.innerHTML = productListing(product);
    productList.append(article);
  }

  $(document).on('click', '.add-to-cart', function(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    let product = products.find((product) => product.id == id);

    console.log(product);
  });

  let cartList = document.getElementById('cartList');
  let cart = [
    { id: 1, info: products[0], quantity: 1 },
    { id: 3, info: products[3], quantity: 2 },
  ];
  shoppingCart(cartList, cart);
});
