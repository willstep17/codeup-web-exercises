function outerFunction(callBackFunction) {
    callBackFunction();
}

outerFunction(function () {
    alert("It works from an anonymous function!");
}); //Passing an anonymous function as a parameter

function passTo() {
    alert("It works from a declared function!");
}

outerFunction(passTo); //Passing a declared function as a parameter
