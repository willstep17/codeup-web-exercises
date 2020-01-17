(function(){
"use strict";

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let plusOne = numbers.map(n => n + 1);

    // let evens = numbers.filter(function(n){
    //    return n % 2 === 0;
    // });

    let evens = numbers.filter(n => n % 2 === 0);

    const sum = numbers.reduce((accumulation, currentNumber) => {
            return accumulation + currentNumber;
        }, 0);

    console.log(plusOne);
    console.log(evens);
    console.log(sum);

})();