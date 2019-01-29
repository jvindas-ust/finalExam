$(document).ready(function() {
  let productList = document.getElementById('productList');
  for (const product of products) {
    let article = document.createElement('article');
    article.classList.add('card', 'card-product');
    article.innerHTML = productListing(product);
    productList.append(article);
  }

  let cartList = document.getElementById('cartList');
  let cart = [
    { id: 1, info: products[0], quantity: 1 },
    { id: 3, info: products[3], quantity: 2 },
  ];
  shoppingCart(cartList, cart);
});
