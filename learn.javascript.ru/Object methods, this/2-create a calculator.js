/*
  Title:
    Create a calculator.

  Description:
    Calculator Create an object (calculator) with three methods:

    read() (read) requests two values and stores them as object properties.
    sum() (sum) returns the sum of the stored values.
    mule() (multiply) multiplies the stored values and returns the result.

    

  Examples:  
    let calculator = {
    // ... your code ...
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );

  Kata Link:
    https://learn.javascript.ru/task/calculator#
*/

let calculator = {
  read() {
    this.a = +prompt('Enter number "a"', 0);
    this.b = +prompt('Enter number "b"', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
