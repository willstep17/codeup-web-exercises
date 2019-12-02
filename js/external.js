"use strict"

//JavaScript with HTML exercises
// console.log("Hello from external JavaScript.");
//
// alert("Welcome to my website!");
//
// var favoriteColor = prompt("Please enter your favorite color");
//
// alert("Great, " + favoriteColor + " is my favorite color too!");

//Data Types Exercise 3-A
function totalPrice(mer, bear, her, pricePerDay) {
    return ("Renting " + mer.name + " for " + mer.days + " day(s), " +
            bear.name + " for " + her.days + " day(s), " +
            " and " + her.name + " for " + her.days + " day(s) " +
            "costs $" + ((mer.days + bear.days + her.days) * pricePerDay) + ".00.");
}

var mermaid = {days: 3, name: "The Little Mermaid"};
var bear = {days: 5, name: "Brother Bear"};
var hercules = {days: 1, name: "Hercules"};

var inputPricePerDay = parseInt(prompt("How many dollars does it cost to rent a movie for a day?"), 10);
mermaid.days = parseInt(prompt("How many days did you rent The Little Mermaid for?"), 10);
bear.days = parseInt(prompt("How many days did you rent Brother for?"), 10);
hercules.days = parseInt(prompt("How many days did you rent Hercules for?"), 10);

alert(totalPrice(mermaid, bear, hercules, inputPricePerDay));

//Data Types Exercise 3-B
function pay(salary, hoursWorked) {
    return salary * hoursWorked;
}

var googleSal = parseInt(prompt("How much do you make an hour at Google?"), 10);
console.log(typeof(googleSal));
var amazonSal = parseInt(prompt("How much do you make an hour at Amazon?"), 10);
console.log(typeof(amazonSal));
var facebookSal = parseInt(prompt("How much do you make an hour at Facebook?"), 10);
console.log(typeof(facebookSal));

var googleHours = parseInt(prompt("How many hours did you work for Google?"), 10);
console.log(typeof(googleHours));
var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"), 10);
console.log(typeof(amazonHours));
var facebookHours = parseInt(prompt("How many hours did you work for Facebook?"), 10);
console.log(typeof(facebookHours));

alert("Your total salary for the week is: $" +
(pay(googleSal, googleHours) + pay(amazonSal, amazonHours) + pay(facebookSal, facebookHours)) + ".00");

//Data Types Exercise 3-C
function canEnroll(full, conflict) {
    return (!full && !conflict) ? "You can enroll." : "You cannot enroll.";
}

var isFull = (parseInt(prompt("How many students are in the class?"), 10) >= 100);
console.log(typeof(isFull));

alert(canEnroll(isFull, false));

//Data Types Exercise 3-D
function offerValid(premium, numberOfProducts, expired) {
    return (!expired && (numberOfProducts > 2 || premium)) ? "Offer Valid" : "Offer Invalid";
}

var inputNumberOfProducts = parseInt(prompt("How many products are you ordering?"), 10);
console.log(typeof(inputNumberOfProducts));

alert(offerValid(false, inputNumberOfProducts, false));