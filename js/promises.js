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
        // wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));
        // wait(6000).then(() => console.log("You\'ll see this after 6 seconds"));

        const getGithubUserLastDate = function(inputUsername) {
           return fetch(`https://api.github.com/users/${inputUsername}/events`, {headers: {'Authorization': gitHubPromiseExerciseToken}})
               .then(response => response.json())
               .then(events => {
                   let newCommit = events.find(event => event.type === "PushEvent");
                   console.log(`The newest commit was made at ${newCommit.created_at}`);
               })
               .catch(error => console.error(error));
        };

        getGithubUserLastDate('willstep17');

    });
})();