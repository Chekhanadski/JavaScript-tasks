/*
  Title:
    Make the first character uppercase

  Description:
    Write the ucFirst(str) function that returns the string str with the uppercase first character. For example:

    ucFirst('map') === 'Map';
    Note that the function must also work with the string:

    - containing only one character 'M'
    - containing no characters ""

  Examples:
  ucFirst('m') === 'M';
  ucFirst('') === '';

  Kata Link:
    https://learn.javascript.ru/taskbook/jsbasic-20230116-2/workspace/1-module/3-task
*/

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
