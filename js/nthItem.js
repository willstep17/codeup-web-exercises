function nthItem (inputArray, n) {
    if(n > inputArray.length) {
        return "The input is larger than the array size.";
    } else {
        return inputArray[n - 1];
    }
}

var nthItemTwo = function (inputArray, n) {
    return inputArray[n - 1];
}

var animals = ["Cat", "Dog", "Seal", "Panda"];
var numbers = [0, 1, 2, 3, 4, 5, 6];
var mixed = ["CodeUp", 43, 74, "November", "Keanu", 12];

console.log(nthItem(animals, 2));
console.log(nthItem(animals, 27));
console.log(nthItemTwo(mixed, 5));
console.log(nthItem(numbers, 2));