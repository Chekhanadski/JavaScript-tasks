/*
  Title:
    Filtering by range

  Description:
    Write a filter Range(arr, a, b) function that takes an array of arr, searches for elements with values greater than or equal to a and less than or equal to b, and returns the result as an array.

    The function should return a new array and not change the original one.

  Examples:
    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (matching values)

    alert( arr ); // 5,3,8,1 (no change)

  Kata Link:
    https://learn.javascript.ru/task/filter-range
*/

function filterRange(arr, a, b) {
  return arr.filter( (elem) => (a <= elem && elem <= b) )
}