/*
  Title:
    Training JS #32: methods of Math---round() ceil() and floor()

  Description:
    Task
      Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

      If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

        roundIt(3.45) should return 4

      If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

        roundIt(34.5) should return 34

      If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

        roundIt(34.56) should return 35

  Kata Link:
    https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
*/

function roundIt(n) {
  let arr = n
    .toString()
    .split(".")
    .map((elem) => elem.length);

  return arr[0] > arr[1]
    ? Math.floor(n)
    : arr[0] === arr[1]
    ? Math.round(n)
    : Math.ceil(n);
}
