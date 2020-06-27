products = {
  cheeseburger: {
    "title": "cheeseburger",
    "yield": "1 serving",
    "description": "Grass-fed beef patty, cheese, mustard and tomato sauce in our signature bun.",
    "img": "/images/menu0.png",
    "price": "10",
    "ingr": ["1 hamburger bun",
      "6 oz beef patty",
      "1 oz cheese",
      "1 oz mustard",
      "1 oz tomato sauce"],
  },
  LOTBurger: {
    "title": "LOT",
    "yield": "1 serving",
    "description": "Grass-fed beef patty, cheese, mustard, mayo, tomato sauce, tomato, lettuce and pickles in our signature bun.",
    "img": "../images/menu1.png",
    "price": "12.9",
    "ingr": ["1 hamburger bun",
      "6 oz beef patty",
      "1 oz cheese",
      "1 oz mustard",
      "1 oz tomato sauce",
      "2 oz lettuce",
      "2 oz tomato",
      "2 oz onion"]
  },
  FriedChickenBurger1: {
    "title": "FriedChickenBurger1",
    "yield": "1 serving",
    "description": "Grilled chicken breast or fried chicken thigh, tom-oli sauce and slaw in our signature bun.",
    "img": "../images/menu2.png",
    "price": "14.5",
    "ingr": ["1 hamburger bun",
      "6 oz fried chicken",
      "1 oz cheese",
      "1 oz mayonnaise",
      "1 oz mustard",
      "1 oz lettuce"]
  },
  FriedChickenBurger2: {
    "title": "FriedChickenBurger2",
    "yield": "1 serving",
    "description": "Grilled chicken breast or fried chicken thigh, slaw, sriracha mayo and Handsome Devils Co hot sauce in our signature bun.",
    "img": "../images/menu3.png",
    "price": "16",
    "ingr": ["1 hamburger bun",
      "6 oz fried chicken",
      "1 oz cheese",
      "1 oz mustard",
      "1 oz lettuce"]
  },
  VeganBurger: {
    "title": "VeganBurger",
    "yield": "1 serving",
    "description": "Spicy bean and quinoa patty, jalapeños, sriracha mayo, cheese, mustard, tomato sauce, tomato, lettuce and pickles in our signature bun.",
    "img": "../images/menu4.png",
    "price": "15",
    "ingr": ["1 hamburger bun",
      "2 oz lettuce",
      "1 oz cheese",
      "1 oz mustard",
      "1 oz lettuce",
      "6 oz vegetable patty",
      "1 oz pickles"]
  },
  chips: {
    "title": "chips",
    "yield": "1 serving",
    "description": "Choice of salt, chicken salt, or dill salt.",
    "img": "../images/menu5.png",
    "price": "5.5",
    "ingr": [
      "5 oz potato"]
  },
  Coke: {
    "title": "coke 375mL",
    "yield": "1 serving",
    "description": "Choice of Coke, Coke No Sugar, Sprite or Fanta.",
    "img": "../images/menu6.png",
    "price": "3.9",
    "ingr": [
      "1.42 oz sugar",
    ]
  }
}





var getBurger = localStorage.getItem("burgersQuantity");
var newGetBurger = JSON.parse(getBurger);
console.log(newGetBurger);

console.log(newGetBurger.quantity);

$(document).ready(function () {
  if(find("cheeseburger")===true){
    var data = products.cheeseburger;
    console.log(products.cheeseburger);
    // the object of a cheeseburger
    var title = data.title;
    var imageBurger = products.cheeseburger.img;
    var quantity = newGetBurger.quantity;
    var addImage = "<section class= \"menuRow\" id=\"\">" + 
    "<div class=\"menu-item\">" +  "<img src=\"" + imageBurger + "\" alt=" + title + "class=\"menuImg\">" + 
    "<div class=\"menuText\">" + "<h2 class=\"menuTitle\">" + title + "</h2>" + "<p class=\"menuTxt\">" + "</p>" + "</div>" + "</div>" + 
    "<h2 class=\"menuPrice\"" + price + "</h2>" + "<div> Quantity: " + quantity + "</div>";
    $(".content-box").append(addImage);
  }
});

{/* <section class="menuRow" id="">
                <div class="menu-item">
                    <img src="./images/menu0.png" alt="Cheeseburger" class="menuImg">
                    <div class="menuText">
                        <h2 class="menuTitle">Cheeseburger</h2>
                        <p class="menuTxt">Grass-fed beef patty, cheese, mustard and tomato sauce in our signature bun.
                        </p>
                        <h2 class="menuPrice">$10.00</h2>
                    </div>
                </div>
                <div class="itemiser">
                    <h2 class="plus digit">+</h2>
                    <h2 class="itemCount digit">0</h2>
                    <h2 class="minus">-</h2>
                </div>
            </section> */}





// checkout button to clear local storage and every singe piece of data 

$("#checkoutBtn").on("click",clearAll);

function clearAll(){
  localStorage.clear();
  location.reload();
}



