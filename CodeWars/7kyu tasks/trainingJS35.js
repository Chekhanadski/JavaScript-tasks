/*
  Title:
    Training JS #35: methods of Math---log() and its family

  Description:
    Task
      Coding in function thinkingAndTesting.

      This time I won't explain to you how to do it. You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-)

      The only hint is: it is related to power.

  Kata Link:
    https://www.codewars.com/kata/57353de879ccaeb9f8000564/train/javascript
*/

function thinkingAndTesting(number, base) {
  return number - base ** Math.floor(Math.log(number) / Math.log(base));
}
