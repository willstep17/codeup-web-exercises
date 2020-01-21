(function(){
"use strict";
    $(document).ready(function(){

        // const wait = function(inputNumber) {
        //     return new Promise(function(resolve, reject) {
        //        setTimeout(function(){
        //            resolve("Works");
        //        }, inputNumber);
        //     });
        // };
        //
        // const waitTwo = (num) => {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve();
        //         }, num);
        //     });
        // };
        //
        // wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));
        // wait(6000).then(() => console.log("You\'ll see this after 6 seconds"));
        // waitTwo(5000).then(() => console.log("You\'ll see this after 5 seconds"));

        // const getGithubUserLastDate = function(inputUsername) {
        //    return fetch(`https://api.github.com/users/${inputUsername}/events`, {headers: {'Authorization': gitHubPromiseExerciseToken}})
        //        .then(response => response.json())
        //        .then(events => {
        //            let newCommit = events.find(event => event.type === "PushEvent");
        //            console.log(`The newest commit was made at ${newCommit.created_at}`);
        //        })
        //        .catch(error => console.error(error));
        // };
        //
        // getGithubUserLastDate('willstep17');

        const lastCommit = (username) => {
            //Return a promise that resolves to time of usernames last commit
            fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': gitHubPromiseExerciseToken}})
                .then(data => data.json())
                .then(data => data.find(event => event.type === "PushEvent"))
                .then(event => event.created_at)
                .then(date => console.log(date));
        };

        lastCommit('willstep17');

    });
})();