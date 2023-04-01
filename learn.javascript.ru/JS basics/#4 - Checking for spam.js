/*
  Title:
    Checking for spam.

  Description:
    Write a check Spam(str) function that returns true if str contains '1xBet' or 'XXX', otherwise false.
  
  Examples:
    The function must be case insensitive:
    checkSpam('1XbeT now') === true
    checkSpam('free xxxxx') === true
    checkSpam('innocent rabbit') === false

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/1-module/4-task
*/

function checkSpam(str) {
  let newStr = str.toLowerCase();
  return newStr.includes('1xbet') || newStr.includes('xxx');
}


