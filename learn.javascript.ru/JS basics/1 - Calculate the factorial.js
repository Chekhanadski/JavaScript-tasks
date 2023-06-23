/*
  Title:
    Calculate the factorial

  Description:
    The factorial of a natural number is a number multiplied by "itself minus one", then by "itself minus two", and so on up to 1. Factorial n is denoted as n!

    The definition of the factorial can be written as:

    n! = n * (n - 1) * (n - 2) * ...*1
    Examples of values for different n:

    0! = 1
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    5! = 5 * 4 * 3 * 2 * 1 = 120
    Note that the factorial of 0 and 1 is 1. This is important and should be taken into account in the decision.

    The task is to write a factorial(n) function that returns n! using a loop (while or for). It is necessary to solve it by a cycle, not by recursion.

  Examples:
    factorial(0); // 1
    factorial(1); // 1
    factorial(3); // 6
    factorial(5); // 120

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/1-module/1-task
*/

function factorial(n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= n - 1;
  }
  return result;
}
