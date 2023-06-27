/*
  Title:
    Calculate BMI

  Description:
    Write function bmi that calculates body mass index (bmi = weight / height2).

      if bmi <= 18.5 return "Underweight"

      if bmi <= 25.0 return "Normal"

      if bmi <= 30.0 return "Overweight"

      if bmi > 30 return "Obese"

  Kata Link:
    https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
*/

function bmi(weight, height) {
  var index = weight / height ** 2;
  switch (true) {
    case index <= 18.5:
      return "Underweight";
    case index <= 25.0:
      return "Normal";
    case index <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}
