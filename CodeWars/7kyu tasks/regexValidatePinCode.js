/*
Title:
  Regex validate PIN code

Description:
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output):
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false

Kata Link:
  https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
*/

function validatePIN(pin) {
  let result;
  let str = pin.replace(/ /g, "");
  str = str.replace(/\n/gi, "");

  let numbers = str
    .split("")
    .every((elem) => Number.isInteger(Number(elem)) && Number(elem) != NaN);
  if (
    numbers == 1 &&
    ((pin.length == 4 && str.length == 4) ||
      (pin.length == 6 && str.length == 6))
  )
    result = true;
  else result = false;

  return result;
}
