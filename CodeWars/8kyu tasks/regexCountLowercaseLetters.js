/*
  Title:
    Regex count lowercase letters

  Description:
    Your task is simply to count the total number of lowercase letters in a string.

  Examples
    "abc" ===> 3

    "abcABC123" ===> 3

    "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

    "" ===> 0;

    "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

    "abcdefghijklmnopqrstuvwxyz" ===> 26
  
  Kata Link:
    https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
*/

function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}
