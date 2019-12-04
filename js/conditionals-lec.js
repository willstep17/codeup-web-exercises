"use strict";

//Immediately Invoked Function Expression
(function(){

// console.log("Hello from conditionals-lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// var isAdmin = true;
//
// if(isAdmin) {
//     //Show admin navbar
//     showAdminNavbar();
// }

//TODO Together: Send a 20% off coupon if its users birthday

// var isBirthday = false;
//
// if(isBirthday) {
//     send20Cupon();
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRaining = true;
//
// if(isRaining) {
//     alert("It's raining");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemPrice = 100;
// var currentBalance = 200;
//
// if(itemPrice <= currentBalance) {
//     alert("You have enough money.");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var inputLives = 1;
// var gameOver = function(lives) {
//     if (lives <= 0) {
//         alert("Sorry, game over");
//     }
// }

// gameOver(inputLives);

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var inputWeather = "snowing";
// var snowingOrNot = function(weather) {
//     (weather === "snowing") ? alert("It's snowing.") : alert("It's not snowing.");
// }

// snowingOrNot(inputWeather);

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var inputNumber = 10;
// var numberEvaluate = function(number) {
//     if (number > 10) {
//         alert("True");
//     }
// }

// numberEvaluate(inputNumber);

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var inputIsAdmin = false;
// var adminNavBar = function(isAdmin) {
//     if(isAdmin) {
//         console.log("Would display admin nav bar.");
//     } else {
//         console.log("Would show normal nav bar.");
//     }
// }
//
// adminNavBar(inputIsAdmin);

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var inputIsRainy = true;
// var raining = function(isRainy) {
//     if(isRainy) {
//         alert("it's raining");
//     } else {
//         alert("Have a nice day!");
//     }
// }
//
// raining(inputIsRainy);


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var inputNumberOfLives = 0;
// var gameOver = function(numberOfLives) {
//     if(numberOfLives <= 0) {
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level!");
//     }
// }
//
// gameOver(inputNumberOfLives);

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var inputWeather = "sanding";
// var snowing = function(weather) {
//     if(weather === "snowing") {
//         alert("It's snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
//
// snowing(inputWeather);

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var inputNumber = 4;
// var numberEvaluator = function(number) {
//     if(number > 10) {
//         alert("True!");
//     } else {
//         alert("The number is less than 10");
//     }
// }
//
// numberEvaluator(inputNumber);

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// var gameOver = function(numberOfLives) {
//     if(numberOfLives <= 0) {
//         return "Sorry, game over";
//     } else {
//         return "Next Level!";
//     }
// }

// var gameOver = function(numberOfLives) {
//     var returnMessage;
//     (numberOfLives === 0) ? returnMessage = "Sorry game is over" : returnMessage = "Next Level!";
//     return returnMessage;
// }
//
// console.log(gameOver(10)); // "Next Level!"

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// var snowing = function(weather) {
//     if(weather === "snowing") {
//         alert("It's snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
//
// snowing("sand storm");
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?");
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     alert("Deleting Everything!");
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weatherAnalysis = function(weather) {
//     var returnWeather;
//     if(weather === "snowing") {
//         returnWeather = "It's snowing!";
//     } else if(weather === "raining") {
//         returnWeather = "It's raining!";
//     } else if(weather === "sunny") {
//         returnWeather = "It's sunny!";
//     } else {
//         returnWeather = "Have a nice day.";
//     }
//     return returnWeather;
// }
//
// alert(weatherAnalysis("raining"));
// alert(weatherAnalysis("sand storming"));
// alert(weatherAnalysis("snowing"));


//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to do when
// approaching that color light at an intersection.

// var trafficInstructions = function(lightColor) {
//     var instructions;
//     if (lightColor === "green") {
//         instructions = "Go";
//     } else if (lightColor === "yellow") {
//         instructions = "You can make it!";
//     } else if (lightColor === "red") {
//         instructions = "Stop";
//     } else {
//         instructions = "?!?!?PANIC!?!?!";
//     }
//     return instructions;
// }
//
// console.log(trafficInstructions("green"));
// console.log(trafficInstructions("yellow"));
// console.log(trafficInstructions("magenta"));






// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible,
// check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they
// are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var licenseValidation = function (userAge, hasPermit) {
//     if (userAge < 15) {
//         alert("You're not old enough.");
//     } else {
//         if (userAge === 15) {
//             alert("You can have a learners permit.");
//         } else if (userAge >= 16 && hasPermit) {
//             alert("You can have a license.")
//         } else if (userAge >= 16 && !hasPermit) {
//             alert("Sorry, you need a permit first.");
//         } else {
//             alert("Please see front desk.");
//         }
//     }
// }
//
// licenseValidation(14, false); //You're not old enough.
// licenseValidation(15, true); //You can have a learners permit.
// licenseValidation(16, false); //Sorry, you need a permit first.
// licenseValidation(16, true); //You can have a license.



// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;
//
// // if(weather === "rainy"){
// //    weatherMessage = "It's raining!";
// // } else {
// //     weatherMessage = "Have a nice day!";
// // }
//
// weather === "rainy" ? weatherMessage = "It's raining!" : weatherMessage = "Have a nice day!";



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce" :
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese" :
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham" :
//         alert("Ham is nice and easy to spell.");
//         break;
//     default :
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var evaluateWeather = function(weather) {
    var returnWeather;
    switch(weather) {
        case "rainy" :
            returnWeather = "It's raining!";
            break;
        case "sunny" :
            returnWeather = "It's sunny!";
            break;
        case "snow" :
            returnWeather = "It's snowing!";
            break;
        default:
            returnWeather = "Have a nice day!";
            break;
    }
    return returnWeather;
}

console.log(evaluateWeather("rainy"));
console.log(evaluateWeather("snow"));
console.log(evaluateWeather("taco"));

//TODO: Rewrite the intersection function from earlier as a switch statement.

// var trafficInstructions = function(lightColor) {
//     var instructions;
//     switch (lightColor) {
//         case "green" :
//             instructions = "Go";
//             break;
//         case "yellow" :
//             instructions = "You can make it!";
//             break;
//         case "red" :
//             instructions = "Stop";
//             break;
//         default :
//             instructions = "?!?!?PANIC?!?!?";
//             break;
//     }
//     return instructions;
// }
//
// console.log(trafficInstructions("green"));
// console.log(trafficInstructions("yellow"));
// console.log(trafficInstructions("magenta"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output

// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
// var shopping = confirm("Has the shopping been done?");
// if(shopping) {
//     console.log("Child gets 10 dollars.");
// } else {
//     console.log("Child gets 5 dollars.");
// }

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

// function weatherAnalysis(weather) {
//     var returnMessage;
//     switch(weather) {
//         case "sunny" :
//             returnMessage = "It's nice and sunny outside.";
//             break;
//         case "rainy" :
//             returnMessage = "It's raining.";
//             break;
//         case "snowing" :
//             returnMessage = "It's snowing.";
//             break;
//         case "overcast" :
//             returnMessage = "It's overcast.";
//             break;
//         default:
//             returnMessage = "It's normal.";
//             break;
//     }
//     return returnMessage;
// }
//
// var weather = prompt("Select the weather type today: ");
// console.log(weatherAnalysis(weather));

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//     var backgroundColor = prompt("What color background would you like?");
//     var background = (backgroundColor === "white") ? "Toggle background to white" : "Toggle background to black";
//     console.log(background);

//END Immediately Invoked Function Expression
})();