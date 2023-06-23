/*
  Title:
    Translate the border-left-width text to borderLeftWidth

  Description:
    Write a camelize(str) function that converts strings like "my-short-string" to "myShortString".

    That is, hyphens are removed, and all words after them get a capital letter.

    P.S. Hint: use split to split a string into an array of characters, then redo everything as needed and use the join method to connect it back.

  Examples:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

  Kata Link:
    https://learn.javascript.ru/task/camelcase
*/

function camelize(str) {
  return str
    .split("-")
    .map((elem, index, array) => {
      if (index !== 0) {
        return elem[0].toUpperCase() + elem.slice(1);
      }
      return elem;
    })
    .join("");
}
