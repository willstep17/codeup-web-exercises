(function(){
"use strict";
    $(document).ready(function(){

    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //
    // const users = [
    //     {
    //         name: 'Dave',
    //         age: 13,
    //         occupation: 'Carpenter'
    //     },
    //     {
    //         name: "Tom",
    //         age: 54,
    //         occupation: "Recruiter"
    //     },
    //     {
    //         name: "Sam",
    //         age: 23,
    //         occupation: "Carpenter"
    //     }
    // ];
    //
    // let ofAgeUsers = users.filter(user => user.age >= 21);
    // console.log(ofAgeUsers);
    //
    // let usersPlusOneYear = users.map(user => user.age + 1);
    // console.log(usersPlusOneYear);

    // let plusOne = numbers.map(n => n + 1);

    // let evens = numbers.filter(function(n){
    //    return n % 2 === 0;
    // });

    // let evens = numbers.filter(n => n % 2 === 0);
    // let odds = numbers.filter(n => n % 2 !== 0);
    //
    // const sum = numbers.reduce((accumulation, currentNumber) => {
    //         return accumulation + currentNumber;
    //     }, 0);
    //
    // console.log(plusOne);
    // console.log(evens);
    // console.log(odds);
    // console.log(sum);

    // const salesPeople = [
    //     {name: 'Jim Halpert', sales: 100},
    //     {name: 'Dwight Schrute', sales: 50},
    //     {name: 'Andy Bernard', sales: 150}
    // ];
    //
    // let totalSales = salesPeople.reduce((total, salesman) => {
    //     return total += salesman.sales;
    // }, 0);

    // function countWords(sentence) {
    //     const words = sentence.split(' '); // transform a sentence into an array of words
    //     const wordCountObject = words.reduce((wordCounts, word) => {
    //         if (typeof wordCounts[word] === 'undefined') {
    //             // if the word is not yet present in our object, set it's value to 1
    //             wordCounts[word] = 1;
    //         } else {
    //             // otherwise increment the existing count
    //             wordCounts[word] += 1;
    //         }
    //         return wordCounts;
    //     }, {}); // start with an empty object
    //     return wordCountObject;
    // }
    //
    // countWords('Mary had a little lamb little lamb little lamb');
    // // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

    function countWords(sentence, counts = {}) {
        const words = sentence.split(' ');
        const wordCountObject = words.reduce((wordCounts, word) => {
            if(typeof wordCounts[word] === 'undefined') {
                wordCounts[word] = 1;
            } else {
                wordCounts[word] += 1;
            }
            return wordCounts;
        }, counts);
        return wordCountObject;
    }

    let currentCount = countWords("This is a test this sentence with duplicate is a is a");
    console.log(countWords("is a New test", currentCount));

    });
})();