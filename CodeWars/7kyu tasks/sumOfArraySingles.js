/*
Title:
  Sum of array singles

Description:
  In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

  For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
  
  More examples in the test cases.
  
  Good luck!

Kata Link:
  https://www.codewars.com/kata/59f11118a5e129e591000134/javascript
*/

function repeats(arr) {
  const obj = {};
  arr.forEach((elem, i) => {
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
  });
  console.log(obj);
  let sum = 0;
  for (let key in obj) {
    if (obj[key] === 1) {
      sum += +key;
    }
  }

  return sum;
}
