var contains = function(arr, thing) {
    return arr.includes(thing);
}

function containsAlternate(arr, thing) {
    for(var i=0;i<arr.length;i++) {
        if(thing === animals[i]) {
            return true;
        }
    }
    return false;
}

var animals = ["Cat", "Dog", "Moose"];

console.log(contains(animals, "Cat"));
console.log(contains(animals, "Bat"));

console.log(containsAlternate(animals, "Dog"));