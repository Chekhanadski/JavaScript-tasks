/*
Title:
  Vowel Count

Description:
  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, u as vowels for this Kata (but not y).

  The input string will only consist of lower case letters and/or spaces.

Kata Link:
  https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

function getCount(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 1;
        break;
      case "i":
        sum += 1;
        break;
      case "o":
        sum += 1;
        break;
      case "u":
        sum += 1;
        break;
      default:
        sum += 0;
        break;
    }
  }
  return sum;
}
