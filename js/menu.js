var add0 = $("#plus0");
var add1 = $("#plus1");
var add2 = $("#plus2");
var add3 = $("#plus3");
var add4 = $("#plus4");
var add5 = $("#plus5");
var add6 = $("#plus6");

var input0 = $("#input0");
var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var input4 = $("#input4");
var input5 = $("#input5");
var input6 = $("#input6");


var minus0 = $("#minus0");
var minus1 = $("#minus1");
var minus2 = $("#minus2");
var minus3 = $("#minus3");
var minus4 = $("#minus4");
var minus5 = $("#minus5");
var minus6 = $("#minus6");


// add0.on("click",function(){
//     console.log("clicked")
//     var oldVal = input0.val();
//     input0.val(parseInt(oldVal)+1);
// })

// minus0.on("click",function(){
//     console.log("clicked")
//     var oldVal = input0.val();
//     input0.val(parseInt(oldVal)-1,);
//     if(input0 <0){
//         return
//     }
// })





input0.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input0.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('Cheeseburger');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        
    }
})

input1.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input1.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('Lot Burger');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        
    }
})

input2.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input2.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('FriedChickenBurger1');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
})

input3.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input3.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('FriedChickenBurger2');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
})

input4.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input4.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('VeganBurger');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
})

input5.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input5.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('Chips');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
})

input6.on("keyup", function (event) {
    if (event.key === "Enter") {
        // Do work
        var quantity = input6.val();
        var whatBurger = this.parentNode.parentNode.childNodes[1].childNodes[1].alt;
        console.log(quantity, whatBurger);
        localStorage.setItem(whatBurger, quantity);
        // var cat = localStorage.getItem();

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('SoftDrink');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
})