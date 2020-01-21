(function(){
"use strict";
    $(document).ready(function(){

        let isAnagram = function(inputWordOne, inputWordTwo) {
            let wordOneArray = inputWordOne.toLowerCase().split('');
            let wordTwoArray = inputWordTwo.toLowerCase().split('');
            for(let letter of wordOneArray) {
                if(!wordTwoArray.includes(letter)) {
                    return false;
                }
            }
            return true;
        };

        console.log(isAnagram("Dog", "God"));
        console.log(isAnagram("Rabbit", "Shellfish"));
        console.log(isAnagram("Act", "Cat"));

    });
})();