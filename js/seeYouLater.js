function seeYouLater(inputString) {
    return (inputString === "alligator") ? "See you later alligator!" : (inputString === "crocodile") ?
    "After a while crocodile!" : "So long!";
}

console.log(seeYouLater("alligator"));
console.log(seeYouLater("crocodile"));
console.log(seeYouLater("wombat"));
console.log(seeYouLater(0));
console.log(seeYouLater(NaN);
console.log(seeYouLater("alli" + "gator"));