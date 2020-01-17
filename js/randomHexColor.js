(function(){
"use strict";
    $(document).ready(function(){
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

        let newId = 1;
        $("#disco").click(function(){
            $("#color-container").append(`<div class="color-block" id="new-block-${newId}"></div>`)
            let newBlockId = `#new-block-${newId}`;
            let randomTimeout = Math.floor(Math.random() * 1000);
            console.log(randomTimeout);
            setInterval(function(){
                $(newBlockId).css("background-color", randomHexColor());
            }, randomTimeout);
            newId++;
        });

    });
})();