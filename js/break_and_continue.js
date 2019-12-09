(function(){
"use strict";

while (true) {
    var oddNumber = prompt("Please enter an odd number between 1 and 50: ");
    if(oddNumber % 2 !== 0 && oddNumber >= 1 && oddNumber <= 50) {
        break;
    }
}

console.log(oddNumber);


})();