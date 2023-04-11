/*
  Title:
    Sum of object properties.

  Description:
    We have an object in which our team's salaries are stored:

      let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }

    Write code to sum up all salaries and save the result in the sum variable. It should be 390.
    If the salaries object is empty, the result should be 0.

  Examples:    

  Kata Link:
    https://learn.javascript.ru/task/sum-object
*/

function sumSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

