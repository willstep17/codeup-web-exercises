(function(){
"use strict"

var x = 2;
while(x <= 65536) {
    console.log(x);
    x *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

while(allCones > 0) {
    var conesThisCustomer = Math.floor(Math.random() * 5) + 1;
    console.log(allCones + " cones left to sell.");
    if (conesThisCustomer === allCones) {
        console.log(conesThisCustomer + " cones sold. I sold all of my cones!")
    } else if (conesThisCustomer > allCones) {
        console.log("Cannot sell you " + conesThisCustomer + " cones. I only have " + allCones);
    } else {
        console.log(conesThisCustomer + " cones sold...");
        allCones -= conesThisCustomer;
    }
}

})();