/*
Title:
  Sum of odd numbers

Description:
  Given the triangle of consecutive odd numbers:

              1
            3     5
        7     9    11
    13    15    17    19
  21    23    25    27    29
  ...

  Calculate the sum of the numbers in the nth row of this triangle (starting at index

Examples (Input --> Output):
  1 -->  1
  2 --> 3 + 5 = 8

Kata Link:
  https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
*/

function rowSumOddNumbers(n) {
	/*
  the first number of the line : (n * (n - 1) + 1);
  
  sum = (n * (n * (n - 1) + 1) + (n * (n - 1));
  sum = n³ - n² + n + n² - n;
  sum = n³;
  */
  return Math.pow(n, 3);
}