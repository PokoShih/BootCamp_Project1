products = {
    cheeseburger: {
        "title": "cheeseburger",
        "yield": "1 serving",
        "description": "Grass-fed beef patty, cheese, mustard and tomato sauce in our signature bun.",
        "img": "../images/menu0.png",
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
            "1.42 oz sugar",]
    }
}


$("#gradNutrition0").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "cheeseburger",
            "description": "",
            "img": "",
            "price": "12",
            "yield": "1 serving",
            "ingr": ["1 hamburger bun",
                "6 oz beef patty",
                "1 oz cheese",
                "1 oz mustard",
                "1 oz tomato sauce"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition0").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition0").append(NutritionSheet);
    });
});


$("#gradNutrition1").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "LOT",
            "yield": "1 serving",
            "description": "Grass-fed beef patty, cheese, mustard, mayo, tomato sauce, tomato, lettuce and pickles in our signature bun.",
            "img": "",
            "price": "",
            "ingr": ["1 hamburger bun",
                "6 oz beef patty",
                "1 oz cheese",
                "1 oz mustard",
                "1 oz tomato sauce",
                "2 oz lettuce",
                "2 oz tomato",
                "2 oz onion"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition1").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition1").append(NutritionSheet);
    });
});


$("#gradNutrition2").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "FriedChickenBurger1",
            "yield": "1 serving",
            "description": "Grilled chicken breast or fried chicken thigh, tom-oli sauce and slaw in our signature bun.",
            "img": "",
            "price": "",
            "ingr": ["1 hamburger bun",
                "6 oz fried chicken",
                "1 oz cheese",
                "1 oz mayonnaise",
                "1 oz mustard",
                "1 oz lettuce"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition2").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition2").append(NutritionSheet);
    });
});

$("#gradNutrition3").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "FriedChickenBurger2",
            "yield": "1 serving",
            "description": "Grilled chicken breast or fried chicken thigh, slaw, sriracha mayo and Handsome Devils Co hot sauce in our signature bun.",
            "img": "",
            "price": "",
            "ingr": ["1 hamburger bun",
                "6 oz fried chicken",
                "1 oz cheese",
                "1 oz mustard",
                "1 oz lettuce"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition3").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition3").append(NutritionSheet);
    });
});

$("#gradNutrition4").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "VeganBurger",
            "yield": "1 serving",
            "description": "Spicy bean and quinoa patty, jalapeños, sriracha mayo, cheese, mustard, tomato sauce, tomato, lettuce and pickles in our signature bun.",
            "img": "",
            "price": "",
            "ingr": ["1 hamburger bun",
                "2 oz lettuce",
                "1 oz cheese",
                "1 oz mustard",
                "1 oz lettuce",
                "6 oz vegetable patty",
                "1 oz pickles"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition4").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition4").append(NutritionSheet);
    });
});

$("#gradNutrition5").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "chips",
            "yield": "1 serving",
            "description": "Choice of salt, chicken salt, or dill salt.",
            "img": "",
            "price": "",
            "ingr": [
                "5 oz potato"]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition5").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition5").append(NutritionSheet);
    });
});

$("#gradNutrition6").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var apiKey = "fd86b70432ba13d8746954732e104180";
    var appId = "f3d164d2";
    var queryURL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        appId +
        "&app_key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "title": "coke 375mL",
            "yield": "1 serving",
            "description": "Choice of Coke, Coke No Sugar, Sprite or Fanta.",
            "img": "",
            "price": "",
            "ingr": [
                "1.42 oz sugar",]
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition6").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition6").append(NutritionSheet);
    });
});
