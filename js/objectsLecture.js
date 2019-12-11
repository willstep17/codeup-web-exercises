var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    options: [
        "four wheel drive",
        "heated seats",
        "leather interior"
    ],
    goGoGo: function(key) {          //Function associated with objects are called methods
        if(key === "key") {
            console.log("VROOM!");
        } else {
            console.log("...");
        }
    }
};

console.log("Car was made in " + car.year);
console.log("Car has these options: ");
car.options.forEach(function(option) {
    console.log(option);
});

car.goGoGo(); //Car won't star incorrect argument
car.goGoGo("key"); //Car will start!

var myCat = {
    name: "Lily",
    age: 6,
    colors: [
        "White",
        "Brown",
        "Black"
    ],
    eyeColor: "Green",
    pet: function(time) {
        if(time >= 5) {
            console.log("Purrrrr");
        } else {
            console.log("* Discontented Silence *");
        }
    }
}

console.log(myCat.name + " is " + myCat.age + " years old.");
myCat.pet(6);
myCat.pet(3);