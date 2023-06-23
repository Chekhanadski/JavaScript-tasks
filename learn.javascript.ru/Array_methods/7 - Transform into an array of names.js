/*
  Title:
    Transform into an array of names
    
  Description:
    You have an array of user objects, and each of them has user.name . 
    Write code that converts them into an array of names.

  Examples:
    let bob = { name: "Bob", age: 25 };
    let alex = { name: "Alex", age: 30 };
    let max = { name: "Max", age: 28 };

    let users = [ bob, alex, max ];

    let names = ... your code 

    alert( names ); // Bob, Alex, Max

  Kata Link:
    https://learn.javascript.ru/task/array-get-names
*/

let bob = { name: "Bob", age: 25 };
let alex = { name: "Alex", age: 30 };
let max = { name: "Max", age: 28 };

let users = [bob, alex, max];

let names = users.map((elem) => elem.name);

console.log(names);
