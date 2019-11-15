function arrayLength(inputArray) {
    return inputArray.length;
}

var test = ['Dog', 'Cat', 'Fish'];
var test2 = [1, 2, 4245, 353, 2424 ,241];
var test3 = [1, 'Dog', 4235, 'Butterfly', 'Cat'];

console.log(arrayLength(test));
console.log(arrayLength(test2));

//Alternative way to define a function
var arrayLengthTwo = function(inputArray) {
    return inputArray.length;
}

console.log(arrayLengthTwo(test2));
console.log(arrayLengthTwo(test3));