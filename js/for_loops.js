(function(){
"use strict";

// var showMultiplicationTable = function(num) {
//     for(var i=1;i<=10;i++) {
//         console.log(num + " x " + i + " = " + num * i);
//     }
// };
//
// showMultiplicationTable(3);
// showMultiplicationTable(7);
//
// var theRandom;
// for(var j=0;j<10;j++) {
//     theRandom = Math.floor(Math.random() * 180) + 20;
//     theRandom % 2 === 0 ? console.log(theRandom + " is even") : console.log(theRandom + " is odd");
// }
//
// for(var k=1;k<=9;k++) {
//     var logString = "";
//     for(var l=1;l<=k;l++) {
//         logString += k;
//     }
//     console.log(logString);
// }
//
// for(var m=1;m<=9;m++) {
//     console.log(m.toString().repeat(m));
// }

for(var n=100;n>=5;n-=5) {
    console.log(m);
}

    function countWords(sentence) {
        const words = sentence.split(' '); // transform a sentence into an array of words
        const wordCountObject = words.reduce((wordCounts, word) => {
            if (typeof wordCounts[word] === 'undefined') {
                // if the word is not yet present in our object, set it's value to 1
                wordCounts[word] = 1;
            } else {
                // otherwise increment the existing count
                wordCounts[word] += 1;
            }
            return wordCounts;
        }, {}); // start with an empty object
        return wordCountObject;
    }


})();