/*
Title:
   Select a number

  Description:
    There is a cost in the form of a string "$120". That is, first comes the currency sign, and then the number.

    Create a function extract Currency Value(str), which will extract a numeric value from such a string and return it.

  Examples:
    alert( extractCurrencyValue('$120') === 120 ); // true

  Kata Link:
    https://learn.javascript.ru/task/extract-currency
*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}
