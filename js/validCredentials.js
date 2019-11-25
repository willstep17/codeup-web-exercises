//Data Types Exercise 4
function validateCredentials(inputUsername, inputPassword) {
    var credentials = [false, false, false, false];
    if(inputPassword.length > 5) {
        credentials[0] = true;
    } else {
        console.log("Your username needs to be at least 5 characters long.");
    }
    if(inputPassword.indexOf(inputUsername) === -1) {
        credentials[1] = true;
    } else {
        console.log("Your password cannot contain your username.");
    }
    if(inputUsername.length < 21) {
        credentials[2] = true;
    } else {
        console.log("Your username cannot be longer than 20 characters.");
    }
    if(inputUsername.length === inputUsername.trim().length) {
        credentials[3] = true;
    } else {
        console.log("Your username cannot contain whitespace before or after it.");
    }
    return credentials;
}

function acceptCredentials(inputCredentials) {
    for(var i = 0; i < inputCredentials.length; i++) {
        if(inputCredentials[i] === false) {
            return "INVALID CREDENTIALS";
        }
    }
    return "VALID CREDENTIALS";
}

var username = 'codeup';
var password = 'notastrongpassword';

console.log(acceptCredentials(validateCredentials(username, password)));