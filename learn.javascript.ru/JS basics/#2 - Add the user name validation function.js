/*
  Title:
    Add a username verification feature

  Description:
    It is necessary that only users who meet the following condition can be greeted on the site – the name is not empty, without spaces, at least 4 characters.


        function print(text) {
          console.log(text);
        }


        function isValid(name) {
          // -->  YOUR CODE...
        }


        function sayHello() {
          let userName = prompt('Enter your name');

          if (isValid(userName)) {
            print(`Welcome back, ${userName}!`);
          } else {
            print('Invalid name');
          }
        }

    sayHello();
 
  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/1-module/2-task
*/

function print(text) {
  console.log(text);
}

function isValid(name) {
  if( name !== '' && name.length >= 4 && !name.includes(' ') ) return true;  
}

function sayHello() {
  let userName = prompt('Enter your name');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Invalid name');
  }
}

sayHello();