/*
Title:
  Check the exam

Description:

  The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
  
  If the score < 0, return 0.

Example:

    Correct answer    |    Student's answer   |   Result 
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

Kata Link:
 https://www.codewars.com/kata/5a3dd29055519e23ec000074/javascript
*/

function checkExam(array1, array2) {
  const result = array1.reduce((sum, item, index) => {
    if(item === '' || array2[index] === '') {
      return sum += 0;
    } else if (item !== array2[index]) {
      return sum -= 1;
    } else if (item === array2[index]) {
      return sum += 4;
    }  
  }, 0)
  
  return result > 0 ? result : 0;
}