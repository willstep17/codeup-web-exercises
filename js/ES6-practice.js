(function(){
"use strict";
    $(document).ready(function(){
        // console.log(Math.pow(2, 8)); //256
        //
        // console.log(2 ** 8); //256
        //
        // for(var i=0;i<16;i++) {
        //     console.log(2 ** i);
        // }
        //
        // console.log(i);
        //
        // for(let c=0;c<5;c++) {
        //     console.log(c);
        // }
        //
        // console.log(c); //Not defined, outside of bracket scope

        //let = block scoped {  }
        //let declaration are not hoisted

        //var = function scoped function(){  }
        //var declarations are hoisted

        // function explore() {
        //     let b = 2;
        //     console.log(a);
        //     console.log(b);
        //     var a = 1; //Var is hoisted
        // }
        //
        // // console.log(b);
        //
        // explore();

        // let fruits = ["apple", "orange", "kiwi"];
        // for (let fruit of fruits) {
        //     console.log(fruit);
        // }
        //
        // const name = 'CodeUp';
        // const vehicle = {
        //     make: 'Jeep',
        //     year: 2010,
        //     color: 'black',
        // };
        // console.log("Hello from " + name + "!");
        // //Same as
        // console.log(`Hello from ${name}!`);
        // console.log(`${name} drives a ${vehicle.color}, ${vehicle.year} ${vehicle.make}`);

        // const sayHello = function(inputName) {
        //     console.log(`Hello ${inputName}!`);
        // };
        //
        // //Doesn't need parenthesis if only one argument
        // //Doesn't need brackets if only one statement
        // const sayHelloTwo = inputName => console.log(`Hello ${inputName}!`);
        //
        // const sayHelloThree = inputName => {
        //     const greeting = `Hello ${inputName}!`;
        //     return greeting;
        // };
        //
        // const addTwo = (first, second) => first + second;
        // console.log(addTwo(1, 2));
        //
        // sayHello('Bob');
        // sayHelloTwo('Rob');
        // console.log(sayHelloThree('Third'));

        const randomHexColor = () => {
            let hexReturn = '#';
            const hexKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let randomNumber = 0;
            for(let i=0;i<6;i++){
                randomNumber = Math.floor(Math.random() * 16);
                hexReturn = hexReturn + hexKey[randomNumber];
            }
            return hexReturn;
        };

        $("#change-random-color").click(function(){
           setInterval(function(){$("#random-color").css("background-color", randomHexColor());}, 1000);
        });
    });
})();