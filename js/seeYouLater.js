function seeYouLater(animal) {
    return (animal === "alligator") ? "See you later alligator!" : (animal === "crocodile") ?
    "After a while crocodile!" : "So long!";
}

console.log(seeYouLater("alligator"));
console.log(seeYouLater("crocodile"));
console.log(seeYouLater("wombat"));