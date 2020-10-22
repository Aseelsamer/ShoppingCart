
'use strict';


// Cart constructor.
var cartArray=[]; //we didn't use it aslan
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  cartArray.push(this);
};



function saveToLocalStorage() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var local = JSON.stringify(cartItemArray);
  localStorage.setItem('myCarts',local);
}


//if null make it empty
var cartItemArray= JSON.parse(localStorage.getItem('myCarts')) || [];
var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
  cartItemArray.push(this);
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

// var dropdown= document.getElementById('items');

// for (var i=0;i<Product.allProducts.length;i++){
//   var option=document.createElement('option');
//   option.textContent=Product.allProducts[i].name;
//   dropdown.appendChild(option);

// }

// var content=document.getElementById('cartContents');

// var addCart=document.getElementById('catalog');

// addCart.addEventListener('click',function(event){
//   event.preventDefault();

//   if (event.target.id === 'submit'){
//     var item = addCart.items.value;
//     var quantity=addCart.quantity.value;
//     console.log(quantity);
//     var cartItem =new CartItem(item,quantity);
//     new Cart(cartItem);
//     console.log(cartArray);
//     console.log(cartItemArray);
//     saveToLocalStorage();

//     //render items
//     renderItems();
//   }
// });

// function renderItems() {
//   content.innerHTML='';
//   for (var i=0; i<cartItemArray.length;i++){

//     var p = document.createElement('p');
//     p.textContent=`Product: ${cartItemArray[i].product}  quantity: ${cartItemArray[i].quantity}`;
//     content.appendChild(p);
//   }
// }

//   renderItems();
