/*
Title:
  Remove anchor from URL

Description:
  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
  "www.codewars.com#about" --> "www.codewars.com"
  "www.codewars.com?page=1" -->"www.codewars.com?page=1"

Kata Link:
  https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
*/

function removeUrlAnchor(url) {
  const indexGrid = url.indexOf("#");
  return indexGrid === -1 ? url : url.slice(0, indexGrid);
}
