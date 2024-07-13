/*
  Title:
    Count characters in your string

  Description:
    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.

  Kata Link:
    https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
*/

function count(string) {
  const countChars = {};
  string.split('').forEach(el => {
    if(el in countChars) {
      return countChars[el] += 1;
    }
    countChars[el] = 1;
  })
  
  return countChars;
}