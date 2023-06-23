/*
  Title:
    The sum of the entered numbers.

  Description:
    Write a sum Input() function that:

    Asks the user to enter values using prompt and saves them to an array.
    Finishes requesting values when the user enters a non-numeric value, an empty string, or clicks Cancel.
    Calculates and returns the sum of the array elements.
    P.S. Zero 0 is considered a number, do not stop entering values when you enter "0".
  
  Examples:    

  Kata Link:
    https://learn.javascript.ru/task/array-input-sum
*/

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Enter number", 0);

    if (value === null || value === "" || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = numbers.reduce((a, b) => a + b, 0);

  return sum;
}
