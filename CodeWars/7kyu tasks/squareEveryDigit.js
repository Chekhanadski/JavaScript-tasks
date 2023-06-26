/*
Title:
  Square Every Digit

Description:
  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Examples:
  An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

NOTE:
  The function accepts an integer and returns an integer.

Happy Coding!

Kata Link:
  https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
*/

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val ** 2;
      })
      .join("")
  );
}
