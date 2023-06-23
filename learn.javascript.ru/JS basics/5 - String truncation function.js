/*
  Title:
    String truncation function.

  Description:
    Create a truncate(str, maxlength) function that checks the length of the string str and, if it exceeds maxlength, replaces the end of str with "…", so that its length becomes equal to maxlength.

    Returning a value
    The function should return:

    The same string if truncation is not required.
    A truncated string if the length of the original string is greater than maxlength.
  
    Please note that in the solution you need to use the special character "three dots" from the problem condition (just copy and paste into your code) :)
  
  Examples:
    truncate('Here is what I would like to say on this topic:', 20) === 'That's what I wante…';
    truncate('Hello everyone', 20) === 'Hello everyone'; 

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/1-module/5-task
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}
