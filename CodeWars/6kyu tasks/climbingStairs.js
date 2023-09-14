/*
  Title:
    Consecutive strings

  Description:
    Task
      A staircase is given with a non-negative cost per each step. Once you pay the cost, you can either climb one or two steps. Create a solution to find the minimum sum of costs to reach the top (finishing the payments including cost[-2] or cost[-1]). You can either start at cost[0] or cost[1].

    Examples
      climbing_stairs([0, 2, 2, 1]) ➞ 2

      climbing_stairs([0, 2, 3, 2]) ➞ 3

      climbing_stairs([10, 15, 20]) ➞ 15

      climbing_stairs([0, 0, 0, 0, 0, 0]) ➞ 0
  
    Notes
      2 <= len(cost) <= 1000
    
  Kata Link:
     https://www.codewars.com/kata/64b7c03910f916000f493f5d/train/javascript 
*/

function climbingStairs(cost) {
  const l = cost.length;

  if (l === 0) return 0;
  if (l === 1) return cost[0];

  let minCost = new Array(l);
  minCost[0] = cost[0];
  minCost[1] = cost[1];

  for (let i = 2; i < l; i++) {
    minCost[i] = cost[i] + Math.min(minCost[i - 1], minCost[i - 2]);
  }
  return Math.min(minCost[l - 1], minCost[l - 2]);
}
