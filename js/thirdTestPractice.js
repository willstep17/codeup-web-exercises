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

var getOlder = function(inputDogs) {
    inputDogs.forEach(function(dog){
       dog.age += 1;
    });
    return inputDogs;
};

console.log(getOlder([
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]));

// function washCars(inputArray) {
//     for(var i=0;i<inputArray.length;i++) {
//         inputArray[i].isDirty = false;
//     }
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
// }

})();