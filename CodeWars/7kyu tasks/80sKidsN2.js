/*
Title:
  80's Kids #2: Help ALF Find His Spaceship

Description:
 Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

Examples:

  findSpaceship(map) => [7, 2]
  
If you cannot find the spaceship, the result should be

  "Spaceship lost forever."

Kata Link:
  https://www.codewars.com/kata/5660aa3d5e011dfd6e000063/train/javascript
*/

function findSpaceship(map) {
  if (map === undefined) {
    return "Spaceship lost forever.";
  }

  const arrMap = map.split("\n").reverse();
  for (let i = 0; i < arrMap.length; i++) {
    const index = arrMap[i].indexOf("X");
    if (index !== -1) {
      return [index, i];
    }
  }
  return "Spaceship lost forever.";
}
