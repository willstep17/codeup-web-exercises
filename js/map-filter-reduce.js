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

        let oneMoreYearExperience = users.map(n => n.yearsOfExperience += 1);
        console.log(oneMoreYearExperience);

        let atLeastThreeLanguages = users.filter(n => n.languages.length >= 3);
        console.log(atLeastThreeLanguages);

        let emails = users.map(n => n.email);
        console.log(emails);

        let totalYearsExperience = users.reduce((years, user) => {
            return years += user.yearsOfExperience;
        }, 0);
        console.log(totalYearsExperience);

        let longestEmail = users.reduce((longest, user) => {
            return longest = user.email.length > longest.length ? user.email : longest;
        }, '');
        console.log(longestEmail);

        let userNameString = users.reduce((namesString, user) => {
            return namesString += user.name + ', ';
        }, '');
        console.log(userNameString);

        let uniqueLanguages = users.reduce((languages, user) => {
            for (let language of user.languages) {
                if (!languages.includes(language)) {
                    languages.push(language);
                }
            }
            return languages;
        }, []);
        console.log(uniqueLanguages);

    });
})();