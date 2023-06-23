/*
  Title:
    Login verification

  Description:
    Write a code that will ask for a login using prompt.

    If a visitor enters "Admin", prompt prompts for a password, if nothing is entered or the Esc key is pressed, show "Canceled", otherwise display "I don't know you".

    Password check like this:

    If the password "I am the main one" is entered, then output "Hello!",
    Otherwise – "Invalid password",
    When canceled – "Canceled".

    For the solution, use nested if blocks. Pay attention to the style and readability of the code.

    Hint: Passing an empty input to the prompt prompt returns an empty string." Pressing Esc during the request returns null.

  Examples:

  Kata Link:
    https://learn.javascript.ru/task/check-login
*/

function loginVerification() {
  let login = prompt("Enter login", "");

  if (login === "Admin") {
    let password = prompt("Enter password", "");
    if (password === `I'm in charge`) alert("Hello!");
    else if (password === null || password === "") alert("Cancelled");
    else alert("Invalid password");
  } else if (login === null || login === "") alert("Cancelled");
  else alert(`I don't know you`);
}
