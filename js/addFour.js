function addFour (a, b, c, d) {
    return a + b + c + d;
}

console.log(addFour(17,100,2,23));
console.log(addFour(17,102,5,"twenty-three"));
//The first three variables are added, then the string is concatenated at the end.
//124twenty-three
console.log(addFour("17", 2, 53, 246));
//Strings add their 'stringyness' and all of the further + become concatenated.
//17253246