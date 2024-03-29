/*
  Title:
    Simple multiplication

  Description:
    This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

  Kata Link:
    https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
*/

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
