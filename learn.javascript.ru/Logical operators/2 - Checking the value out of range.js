/*
  Title:
    Checking the value out of range

  Description:
    Write an if condition to check that the value of the age variable is NOT in the range of 14 and 90 inclusive.

    Write two options: the first one using the NOT ! operator, the second one without this operator.

  Examples:

  Kata Link:
    https://learn.javascript.ru/task/check-if-out-range
*/

// with the operator "!"

function ageBeyondRange1(age) {
  return !(age >= 14 && age <= 90);
}

// with the operator "||"

function ageBeyondRange2(age) {
  return age < 14 || age > 90;
}
