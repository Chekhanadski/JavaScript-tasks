/*
  Title:
    Hello, object.

  Description:
    Write the code by completing the task from each item in a separate line:

    1) Create an empty user object.
    2) Add the name property with the value John.
    3) Add the surname property with the Smith value.
    4) Change the value of the name property to Pete.
    5) Remove the name property from the object.

  Examples:

  Kata Link:
    https://learn.javascript.ru/task/ucfirst
*/

let user = {}; 
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;