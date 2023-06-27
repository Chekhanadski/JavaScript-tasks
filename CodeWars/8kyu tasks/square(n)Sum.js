/*
  Title:
    Square(n) Sum

  Description:
    Complete the square sum function so that it squares each number passed into it and then sums the results together.
  
  Examples:
    For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9.

  Kata Link:
    https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

function squareSum(numbers) {
  return numbers.reduce(function (sum, elem) {
    return sum + elem ** 2;
  }, 0);
}
