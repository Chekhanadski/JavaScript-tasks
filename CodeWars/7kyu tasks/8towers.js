/*
Title:
  8 towers

Description:
  Marcus was spending his last summer day playing chess with his friend Rose.

  Surprisingly, they had a lot of pieces (we suspect Marcus is a part-time thief, but we will leave that aside), and Marcus wondered in how many different positions could 8 towers (rooks) be in the board, without threatening themselves.
  
  Rose (who was smarter) was wondering if there was any relation between the size of the board, and the number of positions.
  
  So, you should help!
  
  Write a function that, given N (positive-only integer) the size of the board , returns the number of different combinations in which these towers can be.

Examples:

  towerCombination(2) returns 2, because only the following possibilities can be achieved.
  
  | x 0 |
  | 0 x |
  
  | 0 x |
  | x 0 |
  
  towerCombination(3) returns 6, because only the following possibilities can be achieved.
  
  | x 0 0 |
  | 0 x 0 |
  | 0 0 x |
  
  | x 0 0 |
  | 0 0 x |
  | 0 x 0 |
  
  | 0 x 0 |
  | x 0 0 |
  | 0 0 x |
  
  | 0 x 0 |
  | 0 0 x |
  | x 0 0 |
  
  | 0 0 x |
  | x 0 0 |
  | 0 x 0 |
  
  | 0 0 x |
  | 0 x 0 |
  | x 0 0 |

Kata Link:
  https://www.codewars.com/kata/535bea76cdbf50281a00004c/javascript
*/

/* Algorithm logic:
     1 * 1 = 1
     2 * 1 = 2
     3 * 2 = 6
     4 * 6 = 24
     5 * 24 = 120
     6 * 120 = 720

 n = 5; ==> 5 * 4 * 3 * 2 * 1 = 120 
 n = 4; ==> 4 * 3 * 2 * 1 = 24
 */

function towerCombination(n) {
  let result = BigInt(1);
  n = BigInt(n);
  while (n > 0) {
    result *= BigInt(n);
    n -= BigInt(1);
  }
  return result;
}
console.log(towerCombination(28));
