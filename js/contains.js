(function(){
"use strict";

var contains = function(arr, thing) {
    return arr.includes(thing);
};

function containsAlternate(arr, thing) {
    for(var i=0;i<arr.length;i++) {
        if(animals[i] === thing) {
            return true;
        }
    }
    return false;
}

var animals = ["Cat", "Dog", "Moose", "Catfish", "Starfish", "Turtle"];

console.log(contains(animals, "Cat")); //True
console.log(contains(animals, "Bat")); //False

console.log(containsAlternate(animals, "Dog")); //True
console.log(containsAlternate(animals, "Rabbit")); //False
console.log(containsAlternate(animals, "Starfish")); //True

})();