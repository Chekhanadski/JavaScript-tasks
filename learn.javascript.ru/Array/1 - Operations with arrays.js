/*
  Title:
    Operations with arrays.

  Description:
    Let's perform 5 operations with the array.

    Create an array of styles with elements "Jazz" and "Blues".
    Add "Rock and Roll" to the end.
    Replace the value in the middle with "Classic". Your code for finding the value in the middle should work for arrays with any length.
    Delete the first element of the array and show it.
    Insert Rap and Reggae at the beginning of the array.
    
    Array in the course of operations:

      Jazz, Blues
      Jazz, Blues, Rock and Roll
      Jazz, Classical, Rock and Roll
      Classics, Rock and Roll
      Rap, Reggae, Classical, Rock and Roll
  
  Examples:    

  Kata Link:
    https://learn.javascript.ru/task/create-array
*/

//#1 Create an array of styles with elements "Jazz" and "Blues".

let styles = ["Jazz", "Blues"];

//#2 Add "Rock and Roll" to the end.

styles.push("Rock and Roll");

//#3 Replace the value in the middle with "Classic". Your code for finding the value in the middle should work for arrays with any length.

styles[Math.floor((styles.length - 1) / 2)] = "Classic";

//#4 Delete the first element of the array and show it.

console.log(styles.shift());

//#5 Insert Rap and Reggae at the beginning of the array.

styles.unshift("Rap", "Reggae");
