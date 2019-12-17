// function goldReindeer(inputReindeer) {
//     var returnArray = [];
//     for(var i=0;i<inputReindeer.length;i++) {
//         if(inputReindeer[i].isGold === true) {
//             returnArray.push(inputReindeer[i]);
//         }
//     }
//     return returnArray;
// }

function goldReindeer(inputReindeer) {
    var returnArray = [];
    inputReindeer.forEach(function(deer){
        if(deer.isGold === true) {
            returnArray.push(deer);
        }
    });
    return returnArray;
}

var reindeerList = [
    {
        name: "Dot",
        age: 5,
        isGold: false
    },
    {
        name: "Dasher",
        age: 8,
        isGold: true
    },
    {
        name: "Sam",
        age: 2,
        isGold: true
    }
];

console.log(goldReindeer(reindeerList));

