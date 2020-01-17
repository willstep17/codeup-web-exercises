(function(){
"use strict";
    $(document).ready(function(){

        function makeRequest() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve("Here is your data");
                    } else {
                        reject("Error. Network Timeout.");
                    }
                }, 6000);
            });
        }

        const myPromise = makeRequest();
        console.log(myPromise);
        myPromise.then(data => console.log("Promise resolved!", data));
        myPromise.catch(error => console.log("Promise rejected!", error));

    });
})();