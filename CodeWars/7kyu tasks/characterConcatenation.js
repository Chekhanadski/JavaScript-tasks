/*
Title:
  Character Concatenation

Description:
  Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

  If the string's length is odd drop the central element.

For example:

  charConcat("abcdef")    == 'af1be2cd3'
  charConcat("abc!def")   == 'af1be2cd3' // same result


Kata Link:
  https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript
*/

function charConcat(string) {
  let newStr = "";
  const l = string.length;
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    newStr += string[i] + string[l - i - 1] + (i + 1);
  }
  return newStr;
}
