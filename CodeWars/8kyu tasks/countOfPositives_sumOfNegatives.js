/*
  Title:
    Count of positives / sum of negatives

  Description:
    Given an array of integers.

    Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.

  Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

  Kata Link:
    https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  const countAndSum = input.reduce(
    (acc, elem) => {
      elem > 0 ? (acc[0] += 1) : (acc[1] += elem);
      return acc;
    },
    [0, 0]
  );

  return countAndSum;
}
