(function(){
"use strict";

var skipNumber;

while (true) {
    skipNumber = Number(prompt("Please enter an odd number between 1 and 50: "));
    if(skipNumber % 2 !== 0 && skipNumber >= 1 && skipNumber <= 50) {
        console.log("Number to skip is: " + skipNumber);
        break;
    }
}

for(var i=1;i<=50;i+=2) {
    if(i === skipNumber) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

})();