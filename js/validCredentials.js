//Data Types Exercise 4
function validateCredentials(inputUsername, inputPassword) {
    var credentialKey = [false, false, false, false];
    if(inputPassword.length > 5) {
        credentialKey[0] = true;
    } else {
        console.log("Your username needs to be at least 5 characters long.");
    }
    if(inputPassword.indexOf(inputUsername) === -1) {
        credentialKey[1] = true;
    } else {
        console.log("Your password cannot contain your username.");
    }
    if(inputUsername.length < 21) {
        credentialKey[2] = true;
    } else {
        console.log("Your username cannot be longer than 20 characters.");
    }
    if(inputUsername === inputUsername.trim()) {
        credentialKey[3] = true;
    } else {
        console.log("Your username cannot contain whitespace before or after it.");
    }
    return credentialKey;
}

function credentialLock(inputCredentials) {
    for(var i = 0; i < inputCredentials.length; i++) {
        if(inputCredentials[i] === false) {
            return "INVALID CREDENTIALS";
        }
    }
    return "VALID CREDENTIALS";
}

var username = 'codeup';
var password = 'notastrongpassword';

console.log(credentialLock(validateCredentials(username, password)));