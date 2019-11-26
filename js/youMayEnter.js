function youMayEnter(inputAge) {
    return (inputAge >= 13) ? "You may enter!" : "Sorry, you need a parent or guardian to enter.";
}

console.log(youMayEnter(13)); //Entry
console.log(youMayEnter(3)); //No Entry
console.log(youMayEnter(14)); //Entry
console.log(youMayEnter(0)); //No Entry