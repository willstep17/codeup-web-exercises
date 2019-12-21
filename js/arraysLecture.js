var pets = [];
pets[0] = "Toby";
pets[1] = "Princess";
pets[2] = "Samson";
pets[3] = "Jill";
pets[4] = "Bubbles";
pets[5] = "Malu";
pets[6] = "Lily";

console.log("There are " + pets.length + " pets in the pets array:");
for(var i=0;i<pets.length;i++) {
    console.log("pets[" + i + "]: " + pets[i]);
}

//pets.forEach function method of iterating over an array.
pets.forEach(function(pet, i) {
   console.log("The pet at pets[" + i + "]: " + pet);
});

// var numbers = [42, 53, 66, 783, 241];
// console.log(numbers[2]);

var suspects = ["Carl", "James", "Sam", "Heather", "Brian"];

function objectifySuspects(inputArray) {
    var suspectObjects = [];
    inputArray.forEach(function(suspect){
        var suspectObject = {
            name: suspect,
            age: Math.floor(Math.random() * 40 + 20)
        };
        suspectObjects.push(suspectObject);
    });
    return suspectObjects;
}

console.log(objectifySuspects(suspects));