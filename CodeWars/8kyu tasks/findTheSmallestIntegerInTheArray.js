/*
  Title:
    Find the smallest integer in the array

  Description:
    Given an array of integers your solution should find the smallest integer.

  Examples:
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
    
  Note:
    You can assume, for the purpose of this kata, that the supplied array will not be empty.

  Kata Link:
    https://www.codewars.com/users/Chekhanadski/completed_solutions
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
