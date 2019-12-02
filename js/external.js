//IIFE - Immediately Invoked Function Expression (Protects the global scope)
(function(){
"use strict";

// ***** JavaScript with HTML exercises *****
// console.log("Hello from external JavaScript.");
//
// alert("Welcome to my website!");
//
// var favoriteColor = prompt("Please enter your favorite color");
//
// alert("Great, " + favoriteColor + " is my favorite color too!");

// ***** Data Types Exercise 3-A *****
function totalPrice(movies, pricePerDay) {
    return "Renting " + movies[0].name + " for " + movies[0].days + " day(s), " +
            movies[1].name + " for " + movies[1].days + " day(s), " +
            " and " + movies[2].name + " for " + movies[2].days + " day(s) " +
            " at a daily rate of $" + pricePerDay + " costs $" +
            ((movies[0].days + movies[1].days + movies[2].days) * pricePerDay);
}

var mermaid = {days: 0, name: "The Little Mermaid"};
var bear = {days: 0, name: "Brother Bear"};
var hercules = {days: 0, name: "Hercules"};
var inputMovies = [mermaid, bear, hercules];

var inputPricePerDay = Number(prompt("How many dollars does it cost to rent a movie for a day?"));
mermaid.days = Number(prompt("How many days did you rent The Little Mermaid for?"));
bear.days = Number(prompt("How many days did you rent Brother for?"));
hercules.days = Number(prompt("How many days did you rent Hercules for?"));

alert(totalPrice(inputMovies, inputPricePerDay));

// ***** Data Types Exercise 3-B *****
// function pay(salary, hoursWorked) {
//     return salary * hoursWorked;
// }
//
// var googleRate = parseInt(prompt("How much do you make an hour at Google?"), 10);
// console.log(typeof(googleRate));
// var amazonRate = parseInt(prompt("How much do you make an hour at Amazon?"), 10);
// console.log(typeof(amazonRate));
// var facebookRate = parseInt(prompt("How much do you make an hour at Facebook?"), 10);
// console.log(typeof(facebookRate));
//
// var googleHours = parseInt(prompt("How many hours did you work for Google?"), 10);
// console.log(typeof(googleHours));
// var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"), 10);
// console.log(typeof(amazonHours));
// var facebookHours = parseInt(prompt("How many hours did you work for Facebook?"), 10);
// console.log(typeof(facebookHours));
//
// alert("Your total salary for the week is: $" +
// (pay(googleRate, googleHours) + pay(amazonRate, amazonHours) + pay(facebookRate, facebookHours)));

// ***** Data Types Exercise 3-C *****
// function canEnroll(full, conflict) {
//     return (!full && !conflict) ? "You can enroll." : "You cannot enroll.";
// }
//
// var isFull = (parseInt(prompt("How many students are in the class?"), 10) >= 100);
// console.log(typeof(isFull));
//
// var scheduleConflict = confirm("Do you have any schedule conflicts?");
// console.log(typeof(scheduleConflict));
//
// alert(canEnroll(isFull, scheduleConflict));

// ***** Data Types Exercise 3-D *****
// function offerValid(valid, numberOfProducts, premium) {
//     return (valid && (numberOfProducts > 2 || premium)) ? "Offer Valid" : "Offer Invalid";
// }
//
// var inputValid = confirm("Is the offer still valid?");
// console.log(typeof(inputValid));
//
// var inputNumberOfProducts = parseInt(prompt("How many products are you ordering?"), 10);
// console.log(typeof(inputNumberOfProducts));
//
// var inputPremium = confirm("Do you have a premium membership?");
// console.log(typeof(inputPremium));
//
// alert(offerValid(inputValid, inputNumberOfProducts, inputPremium));

})();