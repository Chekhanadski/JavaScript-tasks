/*
  Title:
    Calculate average

  Description:
    WWrite a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.
 
  Kata Link:
    codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, elem) => acc + elem, 0) / array.length;
}
