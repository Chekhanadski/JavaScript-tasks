/*
Title:
 Squeaky Window

Description:
  Your function takes in parameter an array of integers nums and a strictly-positive integer k.

  Imagine a sliding window of size k which is moving from left to right in the array. 
  You can only see the k elements that are in the window. The sliding window moves right by one position until it is no longer possible to have k elements in the window. 
  You have to return an array of the maximums for each successive window, from left to right.

Kata Link:
  https://www.codewars.com/kata/55f8b5b09ec923860200000f/javascript
*/

function sliding(nums, k) {
  let resultArr = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let currentArr = nums.slice(i, i + k);
    resultArr.push(Math.max(...currentArr));
  }

  return resultArr;
}
