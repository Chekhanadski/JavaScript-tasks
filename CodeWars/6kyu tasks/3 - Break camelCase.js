/*
  Title:
    Break camelCase

  Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

  Examples:
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""

  Kata Link:
    https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

function solution(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString += " " + string[i];
    } else newString += string[i];
  }
  return newString;
}
