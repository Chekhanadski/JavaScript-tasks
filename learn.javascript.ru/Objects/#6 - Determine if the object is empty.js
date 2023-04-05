/*
  Title:
    Determine if the object is empty.

  Description:
    Create an isEmpty(obj) function that returns true if there are no properties in the object and false if there is at least one property.

    It should work like this:

        function isEmpty(obj) {
          // your code...
        }

        let schedule = {};

        alert( isEmpty(schedule) ); // true

        schedule["8:30"] = "wake up";

        alert( isEmpty(schedule) ); // false

  Examples:

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/2-module/2-task
*/

function isEmpty(obj) {
  if (keys(obj).length === 0) return true;
  
  return false;
}