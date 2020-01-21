(function(){
"use strict";
    // $(document).ready(function(){

        // function makeRequest() {
        //     return new Promise(function (resolve, reject) {
        //         setTimeout(function () {
        //             if (Math.random() > 0.5) {
        //                 resolve("Works.");
        //             } else {
        //                 reject("Fails.");
        //             }
        //         }, 2000);
        //     });
        // }
        //
        // const request = makeRequest();
        // console.log(request);
        // request.then(data => console.log("Promise resolved.", data));
        // request.catch(error => console.log("Promise rejected.", error));

        // fetch('https://api.github.com/users')
        //     .then(response => console.log(`Success:${response}`))
        //     .catch(error => console.log(`Error:${error}`));

        // Promise.resolve('one').then((one) => {
        //     console.log(one);
        //     return 'two';
        // }).then((two) => {
        //     console.log(two);
        //     return 'three';
        // }).then((three) => {
        //    console.log(three);
        // });

        // fetch('https://api.github.com/users')
        //     .then(response => response.json())
        //     .then(users => users.map(user => user.login))
        //     .then(usernames => usernames.forEach((username) => {
        //         console.log(username);
        //     })
        //     .catch(error => console.error(error)));

        function getGithubUsernames() {
            return fetch('https://api.github.com/users')
                .then(response => response.json())
                .then(users => users.map(user => user.login));
        }

        getGithubUsernames().then((usernames) => {
            usernames.forEach((username) => {
                console.log(username);
            })
        }).catch(error => console.error(error));

    // });
})();