function outerFunction(callBackFunction) {
    callBackFunction();
}

outerFunction(function () {
    alert("It works!");
});



