// products = {
//     cheeseburger: {
        // "title": "cheeseburger",
        // "yield": "1 serving",
        // "ingr": ["1 hamburger bun",
        //     "6 oz beef patty",
        //     "1 oz cheese",
        //     "1 oz mustard",
        //     "1 oz tomato sauce"],
//     },
//     LOTBurger: {
//         "title": "LOT",
//         "yield": "1 serving",
//         "ingr": ["1 hamburger bun",
//             "6 oz beef patty",
//             "1 oz cheese",
//             "1 oz mustard",
//             "1 oz tomato sauce",
//             "2 oz lettuce",
//             "2 oz tomato",
//             "2 oz onion"]
//     },
//     FriedChickenBurger1: {
//         "title": "FriedChickenBurger1",
//         "yield": "1 serving",
//         "ingr": ["1 hamburger bun",
//             "6 oz fried chicken",
//             "1 oz cheese",
//             "1 oz mayonnaise",
//             "1 oz mustard",
//             "1 oz lettuce"]
//     },
//     FriedChickenBurger2: {
//         "title": "FriedChickenBurger2",
//         "yield": "1 serving",
//         "ingr": ["1 hamburger bun",
//             "6 oz fried chicken",
//             "1 oz cheese",
//             "1 oz mustard",
//             "1 oz lettuce"]
//     },
//     VeganBurger: {
//         "title": "VeganBurger",
//         "yield": "1 serving",
//         "ingr": ["1 hamburger bun",
//             "2 oz lettuce",
//             "1 oz cheese",
//             "1 oz mustard",
//             "1 oz lettuce",
//             "6 oz vegetable patty",
//             "1 oz pickles"]
//     },
//     chips: {
//         "title": "chips",
//         "yield": "1 serving",
//         "ingr": [
//             "5 oz potato"]
//     },
//     Coke: {
//         "title": "coke 375mL",
//         "yield": "1 serving",
//         "ingr": [
//             "1.42 oz sugar",
//         ]
//     }
// }


$("#gradNutrition").on("click", function (event) {
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
            "yield": "1 serving",
            "ingr": ["1 hamburger bun",
                "6 oz beef patty",
                "1 oz cheese",
                "1 oz mustard",
                "1 oz tomato sauce"],
        }),
    }).then(function (response) {
        var calories = response.totalNutrientsKCal.ENERC_KCAL.quantity;
        var carbs = response.totalNutrientsKCal.CHOCDF_KCAL.quantity;
        // carbs kcal
        var fat = response.totalNutrientsKCal.FAT_KCAL.quantity;
        // kcal
        var protein = response.totalNutrientsKCal.PROCNT_KCAL.quantity;
        console.log(response, calories, carbs, fat, protein);
        $("#gradNutrition").empty();
        var NutritionSheet = "<div class='newDivNutrition'> <li> Calories: " + calories + "KCAL</li> <li>Carbs: " + carbs + "KCAL</li> <li>Fat: " + fat + "KCAL</li> <li>Protein: " + protein + "KCAL</li>" + "</div>";
        $("#gradNutrition").append(NutritionSheet);
    });
});



