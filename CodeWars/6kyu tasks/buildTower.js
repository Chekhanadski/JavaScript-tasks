/*
  Title:
    Build Tower

  Description:
    Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

    [
      "  *  ",
      " *** ", 
      "*****"
    ]
    And a tower with 6 floors looks like this:

    [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]

    Go challenge Build Tower Advanced once you have finished this :)
  
Kata Link:
    https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

function towerBuilder(nFloors) {
  return new Array(nFloors).fill("").map((elem, index) => {
    const spaces = " ".repeat(nFloors - index - 1);
    const stars = "*".repeat(index * 2 + 1);
    return spaces + stars + spaces;
  });
}
