function helloWorld() {
    return 'Hello World';
}

console.log(helloWorld());

let responseKey = {
    hello: "Hello!",
    thankYou: "You're Welcome",
    question: "Answer",
    pie: false,
    last: "Last Response"
}

let question = "thankYou";

console.log(responseKey[question]);