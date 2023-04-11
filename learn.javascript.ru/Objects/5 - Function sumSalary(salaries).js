/*
  Title:
    Function sumSalary(salaries)

  Description:
    We have an object in which our team's salaries are stored:

      let salaries = {
      John: 1000,
      Ann: 1600,
      Pete: 1300,
      month: 'December',
      currency: 'USD',
      isPayed: false
      }

    Write a function to sum up all salaries. It should be 3900.

      sumSalary(salaries); // 3900

    Please note that in addition to salaries, additional information is stored in the object: type of currency (currency), salary paid or not (isPayed). The values in these properties can be of any type except numeric.

    That is, if the property contains a salary, then the value type is a number. However, before adding, we must not forget to exclude special numeric values that do not suit us: NaN, Infinity, -Infinity. And if it is service information, the type of value is any other. We expect to get the amount of salaries only, other properties should be ignored.

    You also need to take into account the situation when there are no properties in the object that store salaries. In this case, the function should return 0.

  Examples: 
    
  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/2-module/1-task
*/

function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {      
    if ( isFinite(salaries[key]) ) {
      sum += salaries[key];          
    } 
  }
  return sum;
}