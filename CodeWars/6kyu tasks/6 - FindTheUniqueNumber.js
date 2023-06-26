/*
  Title:
   Find the unique number.

  Description:
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

      findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
      findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

    It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.

    This is the first kata in series:

    1. Find the unique number (this kata)
    2. Find the unique string
    3. Find The Unique

  Kata Link:
    https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
*/

function findUniq(arr) {
  return arr
    .sort()
    .reduce((num, elem, index, arr) =>
      arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
    );  
}
