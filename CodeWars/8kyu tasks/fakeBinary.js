/*
  Title:
    Fake Binary

  Description:
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

  Note:
    Input will never be an empty string

  Kata Link:
    https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
*/

function fakeBin(x) {
  return x
    .split("")
    .map((i) => (i < 5 ? 0 : 1))
    .join("");
}
