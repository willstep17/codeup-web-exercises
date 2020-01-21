(function(){
"use strict";
    $(document).ready(function(){

        const isAnagram = function(inputWordOne, inputWordTwo) {
            let wordOneArray = inputWordOne.toLowerCase().split('');
            let wordTwoArray = inputWordTwo.toLowerCase().split('');
            for(let letter of wordOneArray) {
                if(!wordTwoArray.includes(letter)) {
                    return false;
                }
            }
            return true;
        };

        const isAnagramTwo = function(inputWordOne, inputWordTwo) {
            return(inputWordOne.toLowerCase().split('').sort().join() ===
                   inputWordTwo.toLowerCase().split('').sort().join());
        };

        console.log(isAnagram("Dog", "God"));
        console.log(isAnagram("Rabbit", "Shellfish"));
        console.log(isAnagramTwo("Act", "Cat"));
        console.log(isAnagramTwo("Bolagna", "Matt Damon"));
        console.log(isAnagramTwo("Dog", "God"));

    });
})();