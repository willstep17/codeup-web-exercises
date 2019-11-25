function totalPrice(movie) {
    console.log("Renting " + movie.name + " costs $" + (movie.days * 3) +".00.");
}

var mermaid = {days: 3, name: "The Little Mermaid"};
var bear = {days: 5, name: "Brother Bear"};
var hercules = {days: 1, name: "Hercules"};

totalPrice(mermaid);
totalPrice(bear);
totalPrice(hercules);

function pay(salary, hoursWorked) {
    return salary * hoursWorked;
}

var googleSal = 400;
var amazonSal = 380;
var facebookSal = 350;

console.log(pay(facebookSal, 10) + pay(googleSal, 6) + pay(amazonSal, 4));

function canEnroll(full, conflict) {
    return (!full && !conflict) ? "You can enroll." : "You cannot enroll.";
}

isFull = true;
isConflict = false;

console.log(canEnroll(isFull, isConflict));


