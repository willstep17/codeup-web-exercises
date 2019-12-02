"use strict"

//JavaScript with HTML exercises
console.log("Hello from external JavaScript.");

alert("Welcome to my website!");

var favoriteColor = prompt("Please enter your favorite color");

alert("Great, " + favoriteColor + " is my favorite color too!");

//Data Types Exercise 3-A
function totalPrice(movie) {
    return ("Renting " + movie.name + " for " + movie.days + " day(s) costs $" + (movie.days * 3) +".00.");
}

var mermaid = {days: 3, name: "The Little Mermaid"};
var bear = {days: 5, name: "Brother Bear"};
var hercules = {days: 1, name: "Hercules"};

mermaid.days = parseInt(prompt("How many days did you rent The Little Mermaid for?"), 10);
console.log(typeof(mermaid.days));
alert(totalPrice(mermaid));

bear.days = parseInt(prompt("How many days did you rent Brother for?"), 10);
console.log(typeof(bear.days));
alert(totalPrice(bear));

hercules.days = parseInt(prompt("How many days did you rent Hercules for?"), 10);
console.log(typeof(hercules.days));
alert(totalPrice(hercules));

//Data Types Exercise 3-B
function pay(salary, hoursWorked) {
    return salary * hoursWorked;
}

var googleSal = 400, amazonSal = 380, facebookSal = 350;

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