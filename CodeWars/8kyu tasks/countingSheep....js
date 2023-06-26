/*
  Title:
    Counting sheep...

  Description:
    Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    Hint: Don't forget to check for bad values like null/undefined.

  Examples:
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

    The correct answer would be 17.

  Kata Link:
    https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript
*/

function countSheeps(arrayOfSheep) {
  let result = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      result += 1;
    }
  }
  return result;
}
