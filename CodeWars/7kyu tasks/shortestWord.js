/*
Title:
  Shortest Word

Description:
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.

Kata Link:
  https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
*/

function findShort(s) {
  let arr = s
    .split(" ")
    .map((elem) => elem.length)
    .sort((a, b) => a - b);
  return arr[0];
}
