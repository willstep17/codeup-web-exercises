function lastItem(inputArray) {
    return inputArray[inputArray.length - 1];
}

//Alternative way to declare a function.
var lastItemTwo = function (inputArray) {
    return inputArray[inputArray.length - 1];
}

function lastItemSlice(inputArray) {
    return stuff.slice(-1)[0];
}

var animals = ["Cow", "Chicken", "Bear"];
var numbers = [43, 52, 75, 1, 74, 90];
var stuff = ["Toolbox", 42, 2020, "Yoyo", "Yoko Ono"];
var classMembers = ["Will", "Matt", "Noland", "Faith"];

console.log(lastItem(animals));
console.log(lastItem(numbers));
console.log(lastItemTwo(stuff));
console.log(lastItemTwo(classMembers));
console.log(lastItemSlice(animals));