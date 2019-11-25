//Data Types Exercise 3-A
function totalPrice(movie) {
    console.log("Renting " + movie.name + " costs $" + (movie.days * 3) +".00.");
}

var mermaid = {days: 3, name: "The Little Mermaid"};
var bear = {days: 5, name: "Brother Bear"};
var hercules = {days: 1, name: "Hercules"};

totalPrice(mermaid);
totalPrice(bear);
totalPrice(hercules);

//Data Types Exercise 3-B
function pay(salary, hoursWorked) {
    return salary * hoursWorked;
}

var googleSal = 400;
var amazonSal = 380;
var facebookSal = 350;

console.log(pay(facebookSal, 10) + pay(googleSal, 6) + pay(amazonSal, 4));

//Data Types Exercise 3-C
function canEnroll(full, conflict) {
    return (!full && !conflict) ? "You can enroll." : "You cannot enroll.";
}

isFull = true;
isConflict = false;

console.log(canEnroll(isFull, isConflict)); //Cannot Enroll
console.log(canEnroll(false, false)); //Can Enroll

//Data Types Exercise 3-D
function offerValid(premium, numberOfProducts, expired) {
    if(premium && !expired) {
        return "You can buy this.";
    } else if(numberOfProducts > 2 && !expired) {
        return "You can buy this.";
    } else {
        return "You cannot buy this.";
    }
}

console.log(offerValid(true, 1, false)); //Can Buy
console.log(offerValid(true, 2, true)); //Cannot Buy
console.log(offerValid(false , 2, false)); //Cannot Buy
console.log(offerValid(false, 3, false)); //Can Buy
console.log(offerValid(false, 26, true)); //Cannot Buy
