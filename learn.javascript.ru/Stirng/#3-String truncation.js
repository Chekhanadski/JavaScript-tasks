/*
  Title:
   String truncation

  Description:
    Create a truncate(str, maxlength) function that checks the length of the string str and, if it exceeds maxlength, replaces the end of str with "...", so that its length becomes equal to maxlength.

    The result of the function should be the same string if truncation is not required, or, if necessary, a truncated string.
  
  Examples:
    truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

    truncate("Всем привет!", 20) = "Всем привет!"

  Kata Link:
    https://learn.javascript.ru/task/truncate
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else return str;
}