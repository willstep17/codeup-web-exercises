/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'will';
var email = 'william.a.stephens17@gmail.com';
var languages = ['html', 'css', 'javascript', 'java', 'apex', 'liquid'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

// const returnEmails = inputUsers => {
//   let emails = [];
//   for(let user of inputUsers) {
//     emails.push(user.email);
//   }
//   return emails;
// }
// console.log(returnEmails(users));

// users.forEach(function(user) {
//   return names.push(user.name);
// });

// const returnNames = inputUsers => {
//   let names = [];
//   for(let user of inputUsers) {
//     names.push(user.name);
//   }
//   return names;
// }
//
// console.log(returnNames(users));

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(let developer of developers) {
  list += `<li>${developer}</li>`;
}
list += '</ul>';

document.getElementById("developer-list").innerHTML = list;

// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
