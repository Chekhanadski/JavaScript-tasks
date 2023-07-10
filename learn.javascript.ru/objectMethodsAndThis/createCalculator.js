/*
  Title:
    Create a calculator

  Description:
    Create a calculator object with three methods:

    read() (read) requests two values and stores them as object properties.
    sum() (sum) returns the sum of the stored values.
    mul() (multiply) multiplies the stored values and returns the result.
  
      let calculator = {
      // ... YOUR CODE ...
      };

      calculator.read();
      alert( calculator.sum() );
      alert( calculator.mul() );

  Kata Link:
    https://learn.javascript.ru/task/calculator
*/

let calculator = {
  read() {
    this.a = +prompt("Enter 'a'", 0);
    this.b = +prompt("Enter 'b'", 0);
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
