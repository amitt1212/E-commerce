const products = [
  {
    "id": 1,
    "name": "Mens Winter Leathers Jackets",
    "category": "men",
    "price": 48.00,
    "del_price": 75.00,
    "star_count": 3,
    "image": "./assets/images/products/jacket-3.jpg",
    "alt_image": "./assets/images/products/jacket-4.jpg",
    "description": "Stay warm and stylish with this men's winter leather jacket. Made with premium materials for durability and comfort."
  },
  {
    "id": 2,
    "name": "Pure Garment Dyed Cotton Shirt",
    "category": "men",
    "price": 45.00,
    "del_price": 56.00,
    "star_count": 3,
    "image": "./assets/images/products/shirt-1.jpg",
    "alt_image": "./assets/images/products/shirt-2.jpg",
    "description": "This cotton shirt offers a relaxed fit with a classic design. The garment-dyed process ensures a soft texture and unisexque look."
  },
  {
    "id": 3,
    "name": "MEN Yarn Fleece Full-Zip Jacket",
    "category": "men",
    "price": 58.00,
    "del_price": 65.00,
    "star_count": 3,
    "image": "./assets/images/products/jacket-5.jpg",
    "alt_image": "./assets/images/products/jacket-6.jpg",
    "description": "A comfortable jacket with yarn fleece for excellent warmth and softness. Ideal for chilly weather."
  },
  {
    "id": 4,
    "name": "Black Floral Wrap Midi Skirt",
    "category": "women",
    "price": 25.00,
    "del_price": 35.00,
    "star_count": 5,
    "image": "./assets/images/products/clothes-3.jpg",
    "alt_image": "./assets/images/products/clothes-4.jpg",
    "description": "This floral wrap skirt has a stylish design and a comfortable fit. Great for both casual and semi-formal occasions."
  },
  {
    "id": 5,
    "name": "Casual Men's Brown shoes",
    "category": "men",
    "price": 99.00,
    "del_price": 105.00,
    "star_count": 5,
    "image": "./assets/images/products/shoe-2.jpg",
    "alt_image": "./assets/images/products/shoe-2_1.jpg",
    "description": "These casual brown shoes are perfect for everyday wear. Made with high-quality leather for durability and style."
  },
  {
    "id": 6,
    "name": "Apple Watch 7 - 2022",
    "category": "electronics",
    "price": 150.00,
    "del_price": 170.00,
    "star_count": 3,
    "image": "./assets/images/products/watch-3.jpg",
    "alt_image": "./assets/images/products/watch-4.jpg",
    "description": "Apple Watch 7 with advanced features for fitness and health tracking. Comes with a stylish design and various color options."
  },
  {
    "id": 7,
    "name": "Stainless Steel Men's Analog Watch",
    "category": "electronics",
    "price": 100.00,
    "del_price": 120.00,
    "star_count": 4,
    "image": "./assets/images/products/watch-1.jpg",
    "alt_image": "./assets/images/products/watch-2.jpg",
    "description": "A classic stainless steel analog watch for men. Offers a sleek design and reliable timekeeping."
  },
  {
    "id": 8,
    "name": "Womens Party Wear Shoes",
    "category": "women",
    "price": 25.00,
    "del_price": 30.00,
    "star_count": 3,
    "image": "./assets/images/products/party-wear-1.jpg",
    "alt_image": "./assets/images/products/party-wear-2.jpg"
  },
  {
    "id": 9,
    "name": "Mens Winter Leathers Jackets",
    "category": "men",
    "price": 32.00,
    "del_price": 45.00,
    "star_count": 4,
    "image": "./assets/images/products/jacket-1.jpg",
    "alt_image": "./assets/images/products/jacket-2.jpg"
  },
  {
    "id": 10,
    "name": "Trekking & Running Shoes - black",
    "category": "unisex",
    "price": 58.00,
    "del_price": 64.00,
    "star_count": 3,
    "image": "./assets/images/products/sports-2.jpg",
    "alt_image": "./assets/images/products/sports-4.jpg"
  },
  {
    "id": 11,
    "name": "Men's Leather Formal Wear shoes",
    "category": "men",
    "price": 50.00,
    "del_price": 65.00,
    "star_count": 4,
    "image": "./assets/images/products/shoe-1.jpg",
    "alt_image": "./assets/images/products/shoe-1_1.jpg"
  },
  {
    "id": 12,
    "name": "Better Basics French Terry Sweatshorts",
    "category": "unisex",
    "price": 78.00,
    "del_price": 85.00,
    "star_count": 3,
    "image": "./assets/images/products/shorts-1.jpg",
    "alt_image": "./assets/images/products/shorts-2.jpg"
  },
  {
    "id": 13,
    "name": "Macbook Air M1 Chip",
    "category": "electronics",
    "price": 1199.00,
    "del_price": 1299.00,
    "star_count": 3,
    "image": "./assets/images/products/macbook-1.jpg",
    "alt_image": "./assets/images/products/macbook-1.jpg"
  },
  {
    "id": 14,
    "name": "Apple iPhone 15 (128 GB) - Blue",
    "category": "electronics",
    "price": 999.00,
    "del_price": 1199.00,
    "star_count": 3,
    "image": "./assets/images/products/iphone-1.jpg",
    "alt_image": "./assets/images/products/iphone-1.jpg"
  },
  {
    "id": 15,
    "name": "Relaxed Short Full Sleeve T-Shirt",
    "category": "women",
    "price": 45.00,
    "del_price": 12.00,
    "star_count": 4,
    "image": "./assets/images/products/clothes-1.jpg",
    "alt_image": "./assets/images/products/clothes-1.jpg"
  },
  {
    "id": 16,
    "name": "Girls Pink Embro Design Top",
    "category": "women",
    "price": 61.00,
    "del_price": 9.00,
    "star_count": 3,
    "image": "./assets/images/products/clothes-2.jpg",
    "alt_image": "./assets/images/products/clothes-2.jpg"
  },
  {
    "id": 17,
    "name": "Black Floral Wrap Midi Skirt",
    "category": "women",
    "price": 76.00,
    "del_price": 25.00,
    "star_count": 4,
    "image": "./assets/images/products/clothes-3.jpg",
    "alt_image": "./assets/images/products/clothes-3.jpg"
  },
  {
    "id": 18,
    "name": "Pure Garment Dyed Cotton Shirt",
    "category": "men",
    "price": 68.00,
    "del_price": 31.00,
    "star_count": 4,
    "image": "./assets/images/products/shirt-1.jpg",
    "alt_image": "./assets/images/products/shirt-1.jpg"
  },
  {
    "id": 19,
    "name": "MEN Yarn Fleece Full-Zip Jacket",
    "category": "Winter wear",
    "price": 61.00,
    "del_price": 11.00,
    "star_count": 4,
    "image": "./assets/images/products/jacket-5.jpg",
    "alt_image": "./assets/images/products/jacket-5.jpg"
  },
  {
    "id": 20,
    "name": "Mens Winter Leathers Jackets",
    "category": "men",
    "price": 32.00,
    "del_price": 20.00,
    "star_count": 3,
    "image": "./assets/images/products/jacket-1.jpg",
    "alt_image": "./assets/images/products/jacket-1.jpg"
  },
  {
    "id": 21,
    "name": "Mens Winter Leathers Jackets",
    "category": "men",
    "price": 32.00,
    "del_price": 20.00,
    "star_count": 3,
    "image": "./assets/images/products/jacket-3.jpg",
    "alt_image": "./assets/images/products/jacket-3.jpg"
  },
  {
    "id": 22,
    "name": "Better Basics French Terry Sweatshorts",
    "category": "unisex",
    "price": 20.00,
    "del_price": 10.00,
    "star_count": 3,
    "image": "./assets/images/products/shorts-1.jpg",
    "alt_image": "./assets/images/products/shorts-1.jpg"
  },
  {
    "id": 23,
    "name": "Running & Trekking Shoes - White",
    "category": "unisex",
    "price": 49.00,
    "del_price": 15.00,
    "star_count": 4,
    "image": "./assets/images/products/sports-1.jpg",
    "alt_image": "./assets/images/products/sports-1.jpg"
  },
  {
    "id": 24,
    "name": "Trekking & Running Shoes - Black",
    "category": "unisex",
    "price": 78.00,
    "del_price": 36.00,
    "star_count": 4,
    "image": "./assets/images/products/sports-2.jpg",
    "alt_image": "./assets/images/products/sports-2.jpg"
  },
  {
    "id": 25,
    "name": "Womens Party Wear Shoes",
    "category": "women",
    "price": 94.00,
    "del_price": 42.00,
    "star_count": 4,
    "image": "./assets/images/products/party-wear-1.jpg",
    "alt_image": "./assets/images/products/party-wear-1.jpg"
  },
  {
    "id": 26,
    "name": "Sports Claw Women's Shoes",
    "category": "women",
    "price": 54.00,
    "del_price": 65.00,
    "star_count": 3,
    "image": "./assets/images/products/sports-3.jpg",
    "alt_image": "./assets/images/products/sports-3.jpg"
  },
  {
    "id": 27,
    "name": "Air Trekking Shoes - White",
    "category": "unisex",
    "price": 52.00,
    "del_price": 55.00,
    "star_count": 3,
    "image": "./assets/images/products/sports-6.jpg",
    "alt_image": "./assets/images/products/sports-6.jpg"
  },
  {
    "id": 28,
    "name": "Boot With Suede Detail",
    "category": "men",
    "price": 20.00,
    "del_price": 30.00,
    "star_count": 3,
    "image": "./assets/images/products/shoe-3.jpg",
    "alt_image": "./assets/images/products/shoe-3.jpg"
  },
  {
    "id": 29,
    "name": "Men's Leather Formal Wear shoes",
    "category": "men",
    "price": 56.00,
    "del_price": 78.00,
    "star_count": 4,
    "image": "./assets/images/products/shoe-1.jpg",
    "alt_image": "./assets/images/products/shoe-1.jpg"
  },
  {
    "id": 30,
    "name": "Casual Men's Brown shoes",
    "category": "men",
    "price": 50.00,
    "del_price": 55.00,
    "star_count": 3,
    "image": "./assets/images/products/shoe-2.jpg",
    "alt_image": "./assets/images/products/shoe-2.jpg"
  },
  {
  "id": 31,
  "name": "Smart Watch with Leather Strap",
  "category": "electronics",
  "price": 50.00,
  "del_price": 34.00,
  "star_count": 0,
  "image": "./assets/images/products/watch-3.jpg",
  "alt_image": "./assets/images/products/watch-3.jpg"
  },
  {
  "id": 32,
  "name": "Silver Deer Heart Necklace",
  "category": "women",
  "price": 84.00,
  "del_price": 30.00,
  "star_count": 0,
  "image": "./assets/images/products/jewellery-3.jpg",
  "alt_image": "./assets/images/products/jewellery-3.jpg"
  },
  {
  "id": 33,
  "name": "Titan 100 Ml Womens Perfume",
  "category": "women",
  "price": 42.00,
  "del_price": 10.00,
  "star_count": 0,
  "image": "./assets/images/products/perfume.jpg",
  "alt_image": "./assets/images/products/perfume.jpg"
  },
  {
  "id": 34,
  "name": "Men's Leather Reversible Belt",
  "category": "men",
  "price": 24.00,
  "del_price": 10.00,
  "star_count": 0,
  "image": "./assets/images/products/belt.jpg",
  "alt_image": "./assets/images/products/belt.jpg"
  },
  {
  "id": 35,
  "name": "Platinum Zircon Classic Ring",
  "category": "women",
  "price": 62.00,
  "del_price": 65.00,
  "star_count": 0,
  "image": "./assets/images/products/jewellery-2.jpg",
  "alt_image": "./assets/images/products/jewellery-2.jpg"
  },
  {
  "id": 36,
  "name": "Classic Analog Watch",
  "category": "electronics",
  "price": 56.00,
  "del_price": 78.00,
  "star_count": 0,
  "image": "./assets/images/products/watch-1.jpg",
  "alt_image": "./assets/images/products/watch-1.jpg"
  },
  {
  "id": 37,
  "name": "Shampoo Conditioner Packs",
  "category": "women",
  "price": 20.00,
  "del_price": 30.00,
  "star_count": 0,
  "image": "./assets/images/products/shampoo.jpg",
  "alt_image": "./assets/images/products/shampoo.jpg"
  },
  {
  "id": 38,
  "name": "Rose Gold Peacock Earrings",
  "category": "women",
  "price": 20.00,
  "del_price": 30.00,
  "star_count": 0,
  "image": "./assets/images/products/jewellery-1.jpg",
  "alt_image": "./assets/images/products/jewellery-1.jpg"
  }      
]



document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.slider-container');

  function scrollSlider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const currentIndex = Array.from(sliderItems).findIndex(item => item.getBoundingClientRect().left >= 0);
    const nextIndex = currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
    const nextItem = sliderItems[nextIndex];
    sliderContainer.scroll({
      left: nextItem.offsetLeft,
      behavior: 'smooth'
    });
  }

  setInterval(scrollSlider, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
  const showcaseContainers = document.querySelectorAll('.showcase-wrapper');
  const showcaseContainer = showcaseContainers[showcaseContainers.length - 1]; 
  function scrollShowcase() {
    const showcaseItems = showcaseContainer.querySelectorAll('.showcase-container');
    const currentIndex = Array.from(showcaseItems).findIndex(item => item.getBoundingClientRect().left >= 0);
    const nextIndex = currentIndex === showcaseItems.length - 1 ? 0 : currentIndex + 1;
    const nextItem = showcaseItems[nextIndex];
    const scrollOffset = nextItem.offsetLeft - showcaseContainer.scrollLeft;
    showcaseContainer.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  }

  setInterval(scrollShowcase, 5000);
});




document.addEventListener("DOMContentLoaded", function() {
  var currencySelect = document.getElementById('currency-select');

  var originalPrices = {};
  var originalDelPrices = {};

  currencySelect.onchange = function selectPrice() {
      var prices = document.querySelectorAll('.price');
      var delPrices = document.querySelectorAll('del');

      if (currencySelect.value == "rup") {
          prices.forEach(function(priceElement, index) {
              var priceText = priceElement.textContent;
              var priceValue = parseFloat(priceText.slice(1));
              originalPrices[index] = priceText;
              priceElement.innerHTML = "&#8377;" + (priceValue * 85).toFixed(2);
          });

          delPrices.forEach(function(delPriceElement, index) {
              var delPriceText = delPriceElement.textContent;
              var delPriceValue = parseFloat(delPriceText.slice(1));
              originalDelPrices[index] = delPriceText;
              delPriceElement.innerHTML = "&#8377;" + (delPriceValue * 85).toFixed(2);
          });
      } else if (currencySelect.value == "usd") {
          prices.forEach(function(priceElement, index) {
              priceElement.innerHTML = originalPrices[index];
          });

          delPrices.forEach(function(delPriceElement, index) {
              delPriceElement.innerHTML = originalDelPrices[index];
          });
      }
  };

  
});

document.addEventListener('DOMContentLoaded', function(){
  let hours = document.querySelectorAll('.hour');
  let days = document.querySelectorAll('.day');
  let minutes = document.querySelectorAll('.minute');
  let seconds = document.querySelectorAll('.second');
  setInterval(function(){
    seconds.forEach(sec =>{
      if(parseInt(sec.textContent) <= 0){ 
        sec.textContent = 59;
        minutes.forEach(min =>{
          if(parseInt(min.textContent) <= 0){
            min.textContent = 59; 
            hours.forEach(hr =>{
              if(parseInt(hr.textContent) <= 0){
                hr.textContent = 24;
                days.forEach(dy =>{
                  if(parseInt(dy.textContent) <= 0){ 
                    dy.textContent = 0;
                  }
                  else{
                    dy.textContent--;
                  }
                })
              }
              else{
                hr.textContent--;
              }
            })
          }
          else{
            min.textContent--;
      }})
      }
      else{
        sec.textContent--;
      }
      sec.textContent = sec.textContent < 10 ? '0' + sec.textContent : sec.textContent;
    })
  }, 1000)
})


document.addEventListener('DOMContentLoaded', function(){
  window.onscroll = function() {myFunction()}; 
      
  var navlist = document.querySelector('.desktop-navigation-menu'); 
  var placeholder = document.querySelector('.header-main-placeholder');
  var sticky = navlist.offsetTop; 
  var navHeight = navlist.offsetHeight;


  function myFunction() { 
      if (window.pageYOffset >= sticky) { 
          navlist.classList.add("sticky");
          placeholder.style.display = "block";
          document.body.style.paddingTop = navHeight + "px"; 
      }  
      else { 
          navlist.classList.remove("sticky"); 
          placeholder.style.display = "none";
          document.body.style.paddingTop = 0; 
      } 
  }

})



let listProductHTML = document.querySelector('.product-grid');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.count-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let cart = [];
let featuredProduct = document.querySelector('.product-featured');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
});



function generateStarRating(starCount) {
    let stars = '';
    for (let i = 0; i < starCount; i++) {
        stars += `<ion-icon name="star"></ion-icon>`;
    }
    for (let i = 0; i < 5 - starCount; i++) {
        stars += `<ion-icon name="star-outline"></ion-icon>`;
    }
    return stars;
}

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity += 1;
    }
    addCartToHTML();
    addCartToMemory();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};


const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity += item.quantity;
            let newItem = createCartItemElement(item);
            listCartHTML.appendChild(newItem);
        });
    }
    iconCartSpan.innerText = totalQuantity;
};


const createCartItemElement = (item) => {
    let positionProduct = products.findIndex((value) => value.id == item.product_id);
    let info = products[positionProduct];
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.dataset.id = item.product_id;
    newItem.innerHTML = `
        <div class="image">
            <img src="${info.image}">
        </div>
        <div class="name">
            ${info.name}
        </div>
        <div class="totalPrice price">$${(info.price * item.quantity).toFixed(2)}</div>
        <div class="quantity">
            <span class="minus">&minus;</span>
            <span>${item.quantity}</span>
            <span class="plus">&plus;</span>
        </div>
    `;
    return newItem;
};


listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(product_id, type);
    }
});

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;
            case 'minus':
                if (info.quantity > 1) {
                    cart[positionItemInCart].quantity -= 1;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
};



var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close-modal")[0];


span.onclick = function() {
  console.log("modal closed")
  modal.style.display = "none";
}
//  clicking  anywhere outside of the modal; closing  it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function closeModal(){
  modal.style.display = "none";
}
const showcases = document.querySelectorAll('.showcase');


showcases.forEach(showcase => {
  showcase.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "block";  
      const id = this.getAttribute('data-id');
      const product = products.find(p => p.id == id); 
      if (product) {
         
          const productInfo = `
              <div class="info-banner"><img src="${product.image}" alt="Product Image" class="info-img" /></div>
                <div class="info-content">
                <div class="info-title">${product.name}</div>
                <div class="info-desc">${product.description}</div>
                <div class="info-rating">${generateStarRating(product.star_count)} &nbsp; ${product.star_count}</div>
                <div class="info-category">${product.category}</div>
                <div class="price-container"> 
                  <div class="price info-price">$${product.price.toFixed(2)}</div>
                  <del class="info-del price">$${product.del_price.toFixed(2)}</del>
                </div>
                <p class="info-info"> Inclusive of all taxes</p>
                <div class="info-action"> 
                  <button class="add-to-fav"><ion-icon name="heart-outline" role="img" class="md hydrated"
                  aria-label="heart outline"></ion-icon></button>
                  <button class="info-cart add-to-cart-btn" onclick="addToCart(${product.id})">
                      Add to Cart
                  </button>
                </div>
                
                </div>
              <div class="close-modal-container"> <span class="close-modal" onclick="closeModal()">&times;</span> </div>
          `;

          
          document.getElementById('product-info').innerHTML = productInfo;
      } else {
          document.getElementById('product-info').innerHTML = 'Product not found';
      }
  });
});
const buttons = document.querySelectorAll('.add-to-cart-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.stopPropagation(); 
        });
});
const buttons1 = document.querySelectorAll('.showcase-container');
        buttons1.forEach(button => {
            button.addEventListener('click', function (e) {
                e.stopPropagation(); // Preventing  the click from reaching the parent "showcase'
        });
});

const getMensPage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = ''; 
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="product-main">
  <h2 class="title">Men's Products</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.category === 'men' || product.category == 'unisex') { 
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};
const createProductElement = (product) => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('showcase');
    newProduct.dataset.id = product.id;
    newProduct.innerHTML = `
    <div class="showcase-banner">
            <img src="${product.image}" alt="${product.name}" width="300" class="product-img default">
            <img src="${product.alt_image}" alt="${product.name}" width="300" class="product-img hover">
            <div class="showcase-actions">
                <button class="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
                <button class="btn-action add-to-cart-btn" onclick="addToCart(${product.id})">
                    <ion-icon name="bag-add-outline"></ion-icon>
                </button>
            </div>
        </div>
        <div class="showcase-content">
            <a href="#" class="showcase-category">${product.category}</a>
            <a href="#">
                <h3 class="showcase-title">${product.name}</h3>
            </a>
            <div class="showcase-rating">
                ${generateStarRating(product.star_count)}
            </div>
            <div class="price-box">
                <p class="price">$${product.price.toFixed(2)}</p>
                <del>$${product.del_price.toFixed(2)}</del>
            </div>
        </div>   
    `;
    return newProduct;
};
const getWomensPage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = ''; 
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="prodcut-main">
  <h2 class="title">Women's Products</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.category === 'women' || product.category == 'unisex') { // Check category
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};
const getElectronicsPage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = '';
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="prodcut-main">
  <h2 class="title">Electronic's Products</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.category === 'electronics') { 
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};
const getOffersPage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = ''; // Clear existing HTML
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="prodcut-main">
  <h2 class="title">Hot Offers</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.price <=100) { 
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};
const getShoesPage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = ''; 
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="prodcut-main">
  <h2 class="title">Sport Shoes</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.name.toLowerCase().includes("shoes")) { 
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};

const getSalePage = () => {
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = ''; 
  productMid.innerHTML = `
  <div class="product-container">
      <div class="container">
        <div class="product-box">
  <div class="prodcut-main">
  <h2 class="title">New Fashion Summer Sale</h2>
  <div class="product-grid"> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> `;
  products.forEach(product => {
    let gridDisplay = document.querySelector('.product-grid');
      if (product.name.toLowerCase().includes("men") ||
          product.name.toLowerCase().includes("men's") ||
          product.name.toLowerCase().includes("women") ||
          product.name.toLowerCase().includes("women's")) { 
          const newProduct = createProductElement(product);
          gridDisplay.appendChild(newProduct);
      }
  });
};
const getBlogPage = () =>{
  const productMid = document.querySelector('.display-mid');
  productMid.innerHTML = `<div class="blog">
  <div class="container">
    <div class="blog-container has-scrollbar">
      <div class="blog-card">
        <a href="#">
          <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner">
        </a>
        <div class="blog-content">
          <a href="#" class="blog-category">Fashion</a>
          <a href="#">
            <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
          </a>
          <p class="blog-meta">
            By <cite>Mr Adam</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
          </p>
        </div>
      </div>
      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Clothes</a>
      
          <h3>
            <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
          </p>
      
        </div>
      
      </div>
      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Shoes</a>
      
          <h3>
            <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
          </p>
      
        </div>
      
      </div>
      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Electronics</a>
      
          <h3>
            <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
          </p>
      
        </div>
      
      </div>
    </div>
  </div>
</div>`;
}



document.addEventListener('DOMContentLoaded', function() {
  const searchField = document.querySelector('.search-field');
  const searchBtn = document.querySelector('.search-btn');
  const productGrid = document.querySelector('.product-grid');

  function performSearch(searchTerm) {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      productGrid.innerHTML = '<p class="no-results">No products found matching your search.</p>';
      return;
    }

    filteredProducts.forEach(product => {
      const newProduct = createProductElement(product);
      productGrid.appendChild(newProduct);
    });
  }

  searchBtn.addEventListener('click', () => {
    performSearch(searchField.value);
  });

  searchField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch(searchField.value);
    }
  });
});



// let listFavHTML = document.querySelector('.listfav');
// let iconFav = document.querySelector('.icon-fav'); 
// let iconFavSpan = document.querySelector('.count-fav');
// let fav = [];
// let closeFav = document.querySelector('.close');

// iconFav.addEventListener('click', () => {
//     body.classList.toggle('showFav');
//     console.log("toggle fav")
// });

// closeFav.addEventListener('click', () => {
//     body.classList.remove('showFav'); 
// });

// const addToFav = (product_id) => {
//     let positionThisProductInFav = fav.findIndex((value) => value.product_id === product_id);
//     if (positionThisProductInFav < 0) {
//         fav.push({
//             product_id: product_id,
//             added: true
//         });
//     }
//     updateFavHTML();
//     saveFavToMemory();
// };


// const saveFavToMemory = () => {
//     localStorage.setItem('fav', JSON.stringify(fav));
// };

// const updateFavHTML = () => {
//     listFavHTML.innerHTML = '';
//     if (fav.length > 0) {
//         fav.forEach(item => {
//             let newFavItem = createFavItemElement(item);
//             listFavHTML.appendChild(newFavItem);
//         });
//     }
// };

// const createFavItemElement = (item) => {
//     let positionProduct = products.findIndex((value) => value.id === item.product_id);
//     let info = products[positionProduct];
//     let newFavItem = document.createElement('div');
//     newFavItem.classList.add('fav-item'); 
//     newFavItem.dataset.id = item.product_id;
//     newFavItem.innerHTML = `
//         <div class="image">
//             <img src="${info.image}" alt="${info.name}">
//         </div>
//         <div class="name">
//             ${info.name}
//         </div>
//         <button class="removeFav">Remove from Favorites</button>
//     `;
//     return newFavItem;
// };

// listFavHTML.addEventListener('click', (event) => {
//     if (event.target.classList.contains('removeFav')) {
//         let product_id = event.target.parentElement.dataset.id;
//         removeFromFav(product_id);
//     }
// });


// const removeFromFav = (product_id) => {
//     let positionItemInFav = fav.findIndex((value) => value.product_id === product_id);
//     if (positionItemInFav >= 0) {
//         fav.splice(positionItemInFav, 1);
//     }
//     updateFavHTML();
//     saveFavToMemory();
// };


let listFavHTML = document.querySelector('.listfav');
let iconFav = document.querySelector('.icon-fav');
let iconFavSpan = document.querySelector('.count-fav');
let fav = [];

const initFavorites = () => {
  const storedFav = localStorage.getItem('favorites');
  if (storedFav) {
    fav = JSON.parse(storedFav);
    updateFavHTML();
    updateFavCount();
  }
};


document.addEventListener('DOMContentLoaded', initFavorites);
iconFav.addEventListener('click', () => {
  document.body.classList.toggle('showFav');
});


document.querySelector('.favtab .close').addEventListener('click', () => {
  document.body.classList.remove('showFav');
});


const addToFav = (product_id) => {
  const exists = fav.find(item => item.product_id === parseInt(product_id));
  
  if (!exists) {
    fav.push({
      product_id: parseInt(product_id),
      added: true
    });
    updateFavHTML();
    updateFavCount();
    saveFavToMemory();
  }
};


const removeFromFav = (product_id) => {
  fav = fav.filter(item => item.product_id !== parseInt(product_id));
  updateFavHTML();
  updateFavCount();
  saveFavToMemory();
};

const updateFavCount = () => {
  iconFavSpan.innerText = fav.length;
};

const saveFavToMemory = () => {
  localStorage.setItem('favorites', JSON.stringify(fav));
};


const updateFavHTML = () => {
  listFavHTML.innerHTML = '';
  
  if (fav.length === 0) {
    listFavHTML.innerHTML = '<p class="empty-fav">No favorite items yet</p>';
    return;
  }

  fav.forEach(item => {
    const product = products.find(p => p.id === item.product_id);
    if (product) {
      const favItem = document.createElement('div');
      favItem.className = 'fav-item';
      favItem.dataset.id = product.id;
      favItem.innerHTML = `
        <div class="image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="name">
          ${product.name}
        </div>
        <div class="actions">
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
          <button class="remove-fav" onclick="removeFromFav(${product.id})">
            Remove
          </button>
        </div>
      `;
      listFavHTML.appendChild(favItem);
    }
  });
};
