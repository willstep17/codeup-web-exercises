(function(){
"use strict";

// function filterNumbers(arr) {
//     var returnArray = [];
//     for(var i=0;i<arr.length;i++) {
//         if(typeof arr[i] === "number") {
//             returnArray.push(arr[i]);
//         }
//     }
//     console.log(returnArray);
//     returnArray.sort(function(a, b){
//         return a - b;
//     });
//     console.log(returnArray);
//     return returnArray;
// }
//
// var numbers = ["ten", false, 1, 2, 25, 7];
//
// filterNumbers(numbers);
// filterNumbers(["fred", true, 5, 3]);

// var getOlder = function(inputDogs) {
//     inputDogs.forEach(function(dog){
//        dog.age++;
//     });
//     return inputDogs;
// };
//
// console.log(getOlder([
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ]));

// function washCars(inputArray) {
//     inputArray.forEach(function(car){
//         car.isDirty = false;
//     });
//     return inputArray;
// }
//
// console.log(washCars(      [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Kia',
//         color: 'blue',
//         year: 2014,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]));

// function adminList(admins) {
//     var areAdmins = [];
//     for(var i=0;i<admins.length;i++) {
//         if(admins[i].isAdmin === true) {
//             areAdmins.push(admins[i]);
//         }
//     }
//     return areAdmins;
// }
//
// console.log(adminList(      [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ]));

// function makeSandwichObjects(breads, fillings) {
//     var sandwiches = [];
//     for(var i=0; i<breads.length;i++) {
//         var sandwichObject = {
//             bread: breads[i],
//             filling: fillings[i],
//         }
//         sandwiches.push(sandwichObject);
//     }
//     return sandwiches;
// }
//
// var breadList = [
//     "white",
//     "wheat",
//     "rhy",
//     "white"
// ];
//
// var fillingList = [
//     "tuna",
//     "ham",
//     "phillyCheese",
//     "doritos"
// ];
//
// console.log(makeSandwichObjects(breadList, fillingList));

function convertNameToObject(inputName) {
    var nameArr = inputName.split(' ');
    var returnObject = { firstName: nameArr[0], lastName: nameArr[1]};
    return returnObject;
}

function capitalizeName(inputName) {
    var firstLast = convertNameToObject(inputName);
    firstLast.firstName = firstLast.firstName[0].toUpperCase() + firstLast.firstName.substr(1).toLowerCase();
    firstLast.lastName = firstLast.lastName[0].toUpperCase() + firstLast.lastName.substr(1).toLowerCase();
    var returnString = "" + firstLast.firstName + " " + firstLast.lastName;
    return returnString;
}

function capitalizeAllNames(inputArr) {
    inputArr.forEach(function(name, i){
        inputArr[i] = capitalizeName(name);
    });
    return inputArr;
}

console.log(capitalizeAllNames(["harry potter", "Dan barl", "ada lovelace", "charles babbage"]));

})();