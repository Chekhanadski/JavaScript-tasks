/*
  Title:
   Checking for spam
  Description:
    Write a check Spam(str) function that returns true if str contains 'viagra' or 'XXX', otherwise false.

    The function must be case insensitive.

  Examples:
    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true
    checkSpam("innocent rabbit") == false

  Kata Link:
    https://learn.javascript.ru/task/check-spam
*/

function checkSpam(str) {
  lowerStr = str.toLowerCase();
  if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) return true;
  return false;
}