function multipleOf(num, mod) {
    return num % mod === 0;
}

function fizzBuzz() {
    var output = "";
    for(var i=1;i<=100;i++) {
        switch(true) {
            case multipleOf(i, 15) :
                output += "FizzBuzz \n";
                break;
            case multipleOf(i, 3) :
                output += "Fizz \n";
                break;
            case multipleOf(i, 5) :
                output += "Buzz \n";
                break;
            default :
                output += i + " \n";
                break;
        }
    }
    return output;
}

console.log(fizzBuzz());