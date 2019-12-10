(function(){
"use strict";

var fruit = ["apple", "orange", "banana"];

fruit.push("pear"); //Adds to end
fruit.push("kiwi"); //Adds to end
fruit.unshift("mango", "watermelon");

console.log(fruit);

var eatFruit = fruit.shift(); //Removes from front
console.log("We ate the " + eatFruit);

console.log("We ate the " + fruit.pop());

console.log(fruit);

fruit.unshift("strawberry"); //Adds to beginning
console.log(fruit);

console.log("The orange is at index of " + fruit.indexOf("orange"));

var catNames = ["Salem", "Lily", "Bella", "Luna", "Callie", "Salem"];
console.log("The first instance of Salem is at " + catNames.indexOf("Salem"));
console.log("The last instance of Salem is at " + catNames.lastIndexOf("Salem"));

var catFruit = [];
for(var i=0;i<catNames.length;i++) {
    catFruit[i] = catNames[i] + fruit[i];
}

console.log(catFruit);
console.log("We ate a " + catFruit.pop() + ". It's gone now.");
})();