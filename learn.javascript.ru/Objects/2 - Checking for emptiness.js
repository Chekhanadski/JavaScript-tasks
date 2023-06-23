/*
  Title:
    Checking for emptiness.

  Description:
    Write the isEmpty(obj) function, which returns true if the object has no properties, otherwise false.

  Examples:
    let schedule = {};
    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false

  Kata Link:
    https://learn.javascript.ru/task/is-empty
*/

function isEmpty(obj) {
  let length = keys(obj).length;

  if (length === 0) return true;

  return false;
}
