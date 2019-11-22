function put2(inputArray) {
    inputArray.push(2);
    return inputArray;
}

var testArray = [23, 41, 4, 64, 33];
var testArray2 = ["Dog", "Vivian", "Daniel", 43, 2];

console.log(put2(testArray));
console.log(put2(testArray2));