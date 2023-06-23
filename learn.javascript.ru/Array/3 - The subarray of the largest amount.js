/*
  Title:
    The subarray of the largest amount.

  Description:
    The input is an array of numbers, for example: arr = [1, -2, 3, 4, -9, 6].

    Task: find a continuous subarray in arr, the sum of elements in which is maximal.

    The get Max Sub Sum(arr) function should return this amount.
    
    If all elements are negative, we take nothing (the subarray is empty) and the sum is "0":

    getMaxSubSum([-1, -2, -3]) = 0

    Try to come up with a quick solution: O(n2), and better for O(n) operations.
    
  Examples:    
    getMaxSubSum([-1, 2, 3, -9]) --> (2, 3) --> sum == 5
    getMaxSubSum([2, -1, 2, 3, -9]) --> (2, -1, 2, 3) --> sum == 6
    getMaxSubSum([-1, 2, 3, -9, 11]) --> (11) --> sum == 11
    getMaxSubSum([-2, -1, 1, 2]) --> (1, 2) --> sum == 3
    getMaxSubSum([100, -9, 2, -3, 5]) --> (100) --> sum == 100
    getMaxSubSum([1, 2, 3]) --> (1, 2, 3) --> sum == 6

  Kata Link:
    https://learn.javascript.ru/task/maximal-subarray
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(partialSum, maxSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}
