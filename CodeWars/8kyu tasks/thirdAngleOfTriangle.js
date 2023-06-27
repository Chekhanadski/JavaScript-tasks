/*
  Title:
    Third Angle of a Triangle

  Description:
    You are given two interior angles (in degrees) of a triangle.

    Write a function to return the 3rd.

  Note: 
    Only positive integers will be tested.

  Kata Link:
    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
*/

function otherAngle(a, b) {
  return 180 - (a + b);
}
