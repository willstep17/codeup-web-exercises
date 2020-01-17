(function(){
"use strict";
    $(document).ready(function(){

        const users = [
            {
                id: 1,
                name: 'ryan',
                email: 'ryan@codeup.com',
                languages: ['clojure', 'javascript'],
                yearsOfExperience: 5
            },
            {
                id: 2,
                name: 'luis',
                email: 'luis@codeup.com',
                languages: ['java', 'scala', 'php'],
                yearsOfExperience: 6
            },
            {
                id: 3,
                name: 'zach',
                email: 'zach@codeup.com',
                languages: ['javascript', 'bash'],
                yearsOfExperience: 7
            },
            {
                id: 4,
                name: 'fernando',
                email: 'fernando@codeup.com',
                languages: ['java', 'php', 'sql'],
                yearsOfExperience: 8
            },
            {
                id: 5,
                name: 'justin',
                email: 'justin@codeup.com',
                languages: ['html', 'css', 'javascript', 'php'],
                yearsOfExperience: 9
            }
        ];

        let moreThanThreeLanguages = users.filter(n => n.languages.length >= 3);
        let userEmail = users.map(n => n.email);
        let totalYearsExperience = users.reduce((totalYears, person) => {
            return totalYears + person.yearsOfExperience;
        }, 0);
        let longestEmail = users.reduce((longest, user) => {
            return longest.length > user.email.length ? longest : user.email;
        }, '');

        let userString = users.reduce((userNames, user) => {
            return userNames += user.name + ' ';
        }, '');

        console.log(totalYearsExperience);
        console.log(longestEmail);
        console.log(userString);

    });
}());