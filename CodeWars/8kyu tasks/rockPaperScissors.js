/*
  Title:
    Rock Paper Scissors

  Description:
    Let's play! You have to return which player won! In case of a draw return Draw!

  Examples:
    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"

  Kata Link:
    https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
*/

const rps = (p1, p2) => {
  switch (p1 + p2) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      return "Player 1 won!";

    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      return "Player 2 won!";

    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
      return "Draw!";
  }
};
