function averageHamsterHeight(hamsters) {
    let totalHeight = 0;
    let totalHamsters = 0;
    hamsters.forEach(function(hamster){
        totalHeight += hamster.heightInMM;
        totalHamsters ++;
    });
    let averageHeightInMM = totalHeight / totalHamsters;
    return "The average height of these hamsters in MM is: " + averageHeightInMM;
}

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

console.log(averageHamsterHeight(hamsters));