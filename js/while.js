(function(){
"use strict";

var x = 2;
while(x <= 65536) {
    console.log(x);
    x *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(allCones + " cones left to sell");
    var conesThisCustomer = Math.floor(Math.random() * 5) + 1;
    if (conesThisCustomer > allCones) {
        console.log("Cannot sell you " + conesThisCustomer + " cones I only have " + allCones + "...");
    } else {
        allCones -= conesThisCustomer;
        console.log(conesThisCustomer + " cones sold...");
    }
} while(allCones > 0)

console.log("Yay! I sold them all!");

})();