var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    options: [
        "four wheel drive",
        "heated seats",
        "leather interior"
    ],
    goGoGo: function(key) {  //Function associated with objects are called methods
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
    },
    camouflage: function(input) {
        if(this.colors.includes(input)) {
            console.log(this.name + " is able to blend into the surroundings.");
        } else {
            console.log(this.name + " is out in the open!");
        }
    }
}

console.log(myCat.name + " is " + myCat.age + " years old.");
myCat.pet(6);
myCat.pet(3);
myCat.camouflage("Blue");
myCat.camouflage("Brown");
console.log("Lily is colored: ");
myCat.colors.forEach(function(color) {
    console.log(color);
});

class vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName() {
        return this.make;
    }
}

var jeep = new vehicle("Jeep", "Wrangler", "Black");

console.log(jeep.getName());

let fridge = new Object();

fridge.make = "Whirlpool";
fridge.shelves = 4;