/*
  Title:
    Counting Duplicates

  Description:
    Count the number of Duplicates
      Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
  
  Examples:
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice

  Kata Link:
    https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
*/
function duplicateCount(text) {
  let obj = {};
  let number = 0;

  let arr = text
    .toLowerCase()
    .split("")
    .forEach((elem) => {
      obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
    });
  let arr2 = Object.entries(obj);
  arr2.map(([key, value]) => {
    if (value > 1) {
      number++;
    }
  });
  return number;
}
