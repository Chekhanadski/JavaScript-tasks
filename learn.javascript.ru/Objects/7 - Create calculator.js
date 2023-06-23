/*
  Title:
    Create calculator.

  Description:
    Create a calculator object with three methods:

    - read(a, b) (read) requests two values and stores them as object properties.
    - sum() (sum) returns the sum of the stored values.
    - mul() (multiply) multiplies the stored values and returns the result.

      let calculator = {
        // ...your code ...
      };

      calculator.read(3, 5);
      console.log(calculator.sum()); // 8
      console.log(calculator.mul()); // 15

  Examples:

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/2-module/3-task
*/

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
