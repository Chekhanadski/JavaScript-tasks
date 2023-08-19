/*
  Title:
    Rot13

  Desctiption: 
    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 
  Kata Link:
    https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
*/

function rot13(message) {
  return message.replace(/[a-zA-Z]/g, function (char) {
    const offset = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97;
    const shiftedCharCode = ((char.charCodeAt(0) - offset + 13) % 26) + offset;
    return String.fromCharCode(shiftedCharCode);
  });
}
