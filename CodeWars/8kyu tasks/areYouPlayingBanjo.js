/*
  Title:
    Are You Playing Banjo?

  Description:
    Create a function which answers the question "Are you playing banjo?".
  If your name starts with the letter "R" or lower case "r", you are playing banjo!

  Examples:
    The function takes a name as its only argument, and returns one of the following strings:

      name + " plays banjo" 
      name + " does not play banjo"

  Note:
    Names given are always valid strings.

  Kata Link:
    https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
*/

function areYouPlayingBanjo(name) {
  switch (name[0]) {
    case "R":
      return name + " plays banjo";
    case "r":
      return name + " plays banjo";
    default:
      return name + " does not play banjo";
  }
}
