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



$(document).ready(function () {
  if(parseInt(localStorage.getItem("Cheeseburger")) > 0 ){
    console.log("working")
    var data = products.cheeseburger;
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    var imageBurger = products.cheeseburger.img;
    var quantity = localStorage.getItem("Cheeseburger");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"CheeseburgerPrice",
            text: "Total: $" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )

    
    
    $(".content-box").append(addImage);
  }else{
    return
  }
  
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("Lot Burger")) > 0 ){
    console.log("working")
    var data = products.LOTBurger;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.LOTBurger.img;
    var quantity = localStorage.getItem("Lot Burger");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"LotBurgerPrice",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("FriedChickenBurger1")) > 0 ){
    console.log("working")
    var data = products.FriedChickenBurger1;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.FriedChickenBurger1.img;
    var quantity = localStorage.getItem("FriedChickenBurger1");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"FriedChickenBurgerPrice1",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("FriedChickenBurger2")) > 0 ){
    console.log("working")
    var data = products.FriedChickenBurger2;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.FriedChickenBurger2.img;
    var quantity = localStorage.getItem("FriedChickenBurger2");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"FriedChickenBurgerPrice2",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("VeganBurger")) > 0 ){
    console.log("working")
    var data = products.VeganBurger;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.VeganBurger.img;
    var quantity = localStorage.getItem("VeganBurger");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"VeganBurgerPrice",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("Chips")) > 0 ){
    console.log("working")
    var data = products.chips;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.chips.img;
    var quantity = localStorage.getItem("Chips");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"ChipsPrice",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});

$(document).ready(function () {
  if(parseInt(localStorage.getItem("SoftDrink")) > 0 ){
    console.log("working")
    var data = products.Coke;
    console.log(data);
    // the object of a cheeseburger
    var title = data.title;
    var burgerPrice = data.price;
    console.log(burgerPrice)
    var imageBurger = products.Coke.img;
    var quantity = localStorage.getItem("SoftDrink");
    var addImage = $("<section>",{
      class:"menuRow",
    }).append(
      $("<div>",{
        class:"menu-item",
      }).append(
        $("<img>",{
          src: imageBurger,
          alt: title,
          class:"menuImg"
        }),
        $("<div>",{
          class:"menuText"
        }).append(
          $("<h2>",{
            class:"menuTitle",
            text: title
          }),
          $("<p>",{
            class: "menuTxt",
            text:"Quantity: " + quantity
            // description from object
          }),
          $("<h2>",{
            class:"menuPrice",
            id:"SoftDrinkPrice",
            text: "$" +burgerPrice*quantity
            // price from object
          })
        )
      )
    )
    $(".content-box").append(addImage);
  }else{
    return}
});


// checkout button to clear local storage and every singe piece of data 

$("#checkoutBtn").on("click",clearAll);

function clearAll(event){
  event.preventDefault;var prices0 = parseInt(localStorage.getItem("Cheeseburger"))*products.cheeseburger.price;
  var prices1 = parseInt(localStorage.getItem("Lot Burger"))*products.price;
  var prices2 = parseInt(localStorage.getItem("FriedChickenBurger1"))*products.FriedChickenBurger1.price;
  var prices3 = parseInt(localStorage.getItem("FriedChickenBurger2"))*products.FriedChickenBurger2.price;
  var prices4 = parseInt(localStorage.getItem("VeganBurger"))*products.VeganBurger.price;
  var prices5 = parseInt(localStorage.getItem("Chips"))*products.chips.price;
  var prices6 = parseInt(localStorage.getItem("SoftDrink"))*products.Coke.price;
    
    var total = parseInt(prices0)+parseInt(prices2)+parseInt(prices3)+parseInt(prices4)+parseInt(prices5)+parseInt(prices6);
    console.log(total);
  // localStorage.clear();
  var addImage = $("<section>",{
    class:"menuRow",
  }).append(
    $("<div>",{
      class:"menuText",
      text:"Total: $" + total + "   Your Order has been placed!"
    })
    )

  $(".content-box").append(addImage);


  // id:"SoftDrinkPrice"
  // id:"ChipsPrice"
  // id:"VeganBurgerPrice"
  // id:"VeganBurgerPrice",
  // id:"FriedChickenBurgerPrice2",
  // id:"FriedChickenBurgerPrice1",
  // id:"LotBurgerPrice",
  // id:"CheeseburgerPrice",
}



// products = {
//   cheeseburger: {
//     "title": "cheeseburger",
//     "yield": "1 serving",
//     "description": "Grass-fed beef patty, cheese, mustard and tomato sauce in our signature bun.",
//     "img": "/images/menu0.png",
//     "price": "10",