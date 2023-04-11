/*
  Title:
    Create an expandable calculator
    
  Description:
   Create a Calculator Constructor function that creates "expandable" calculator objects.

    The task consists of two parts.

  1.  First, implement the calculate(str) method, which takes a string of type "1 + 2" in the format "NUMBER operator NUMBER" (separated by spaces) and returns the result. The method should understand plus + and minus -.

      Usage example:
        let calc = new Calculator;
        alert( calc.calculate("3 + 7") ); // 10

  2. Then add the add Method(name, func) method, which adds new operations to the calculator. It takes the name operator and a function with two arguments func(a,b) that describes it.

      For example, let's add multiplication*, division/ and exponentiation **:

        let powerCalc = new Calculator;
        powerCalc.addMethod("*", (a, b) => a * b);
        powerCalc.addMethod("/", (a, b) => a / b);
        powerCalc.addMethod("**", (a, b) => a ** b);

        let result = powerCalc.calculate("2 ** 3");
        alert( result ); // 8

      Brackets or complex expressions are not needed for this task.
      The numbers and the operator are separated by exactly one space.
      It would not be superfluous to add error handling.

  Kata Link:
    https://learn.javascript.ru/task/calculator-extendable
*/

function Calculator() {

  this.methods = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b
  }

  this.calculate = function(str) {
      let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

      if ( !this.methods[op] || isNaN(a) || isNaN(b) ) {
          return NaN;
      }

      return this.methods[op](a, b);        
  }

  this.addMethod = function(name, func) {
      this.methods[name] = func;
  }
}

let calc = new Calculator;
console.log(calc.calculate('2 + 14'));

calc.addMethod('**', (a, b) => a ** b);
console.log(calc.calculate('2 ** 3'));

