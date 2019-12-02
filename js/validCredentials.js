//Data Types Exercise 4
function buildCredentialKey(inputUsername, inputPassword) {
    var credentialKey = [false, false, false, false];
    if(inputPassword.length > 5) {
        credentialKey[0] = true;
    } else {
        alert("Your username needs to be at least 5 characters long.");
    }
    if(inputPassword.indexOf(inputUsername) === -1) {
        credentialKey[1] = true;
    } else {
        alert("Your password cannot contain your username.");
    }
    if(inputUsername.length < 21) {
        credentialKey[2] = true;
    } else {
        alert("Your username cannot be longer than 20 characters.");
    }
    if(inputUsername === inputUsername.trim()) {
        credentialKey[3] = true;
    } else {
        alert("Your username cannot contain whitespace before or after it.");
    }
    return credentialKey;
}

function credentialLock(credentialKey) {
    for(var i = 0; i < credentialKey.length; i++) {
        if(credentialKey[i] === false) {
            return "INVALID CREDENTIALS";
        }
    }
    return "VALID CREDENTIALS";
}

var username = prompt("Enter a username: ");
var password = prompt("Enter a password: ");

alert(credentialLock(buildCredentialKey(username, password)));