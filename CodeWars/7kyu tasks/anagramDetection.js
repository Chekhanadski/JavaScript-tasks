/*
Title:
  Anagram Detection

Description:
  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: 

  Anagrams are case insensitive

  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples:

  "foefet" is an anagram of "toffee"

  "Buckethead" is an anagram of "DeathCubeK"

Kata Link:
  https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
*/

const isAnagram = function (test, original) {
  const sortTest = test.toUpperCase().split("").sort().join("");
  const sortOriginal = original.toUpperCase().split("").sort().join("");
  return sortTest === sortOriginal;
};
