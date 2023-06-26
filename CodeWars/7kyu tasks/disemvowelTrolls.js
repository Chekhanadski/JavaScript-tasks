/*
Title:
  Disemvowel Trolls

Description:
  Trolls are attacking your comment section!

  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

  Your task is to write a function that takes a string and return a new string with all vowels removed.

Examples:
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: 
  For this kata "y" isn't considered a vowel.

Kata Link:
  https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
*/

function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, "");
  return str;
}
