/*
  Title:
    Make the first character uppercase

  Description:
    Write the ucFirst(str) function that returns the string str with the uppercase first character.

  Examples:
    ucFirst("john") == "John";

  Kata Link:
    https://learn.javascript.ru/task/ucfirst
*/

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
