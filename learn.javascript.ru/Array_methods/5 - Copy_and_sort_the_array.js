/*
  Title:
    Copy and sort the array
    
  Description:
    We have an array of arr strings. You need to get a sorted copy, but leave the arr unchanged.

    Create a copy Sorted(arr) function that will return such a copy. 

  Examples:
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)

  Kata Link:
    https://learn.javascript.ru/task/copy-sort-array
*/


function copySorted(arr) {
    
  return arr.slice().sort( (a, b) => a.localeCompare(b) );
}

let sorted = copySorted(arr);
