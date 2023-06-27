/*
  Title:
    Sentence Smash

  Description:
    Sentence Smash
      Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!Build a function that returns an array of integers from n to 1 where n>0.

  Examples:
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

  Kata Link:
    https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
*/

function smash(words) {
  return words.join(" ");
}
