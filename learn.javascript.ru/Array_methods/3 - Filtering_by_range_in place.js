/*
  Title:
    Filtering by range "in place"

  Description:
    Write a filterRangeInPlace(arr, a, b) function that takes an array of arr and removes from it all values except those between a and b. That is, the check has the form a ≤ arr[i] ≤ b.

    The function should modify the received array and return nothing.

  Examples:
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // removed numbers out of range 1..4

    alert( arr ); // [3, 1]

  Kata Link:
    https://learn.javascript.ru/task/filter-range-in-place
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || b < arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
}
