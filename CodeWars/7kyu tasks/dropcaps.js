/*
  Title:
    Dropcaps

  Description:
    DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

    But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

    *should work also on Leading and Trailing Spaces and caps.

    Exemples:
      "apple"            => "Apple"
      "apple of banana"  => "Apple of Banana"
      "one   space"      => "One   Space"
      "   space WALK   " => "   Space Walk   " 

    Note: 
      You will be provided atleast one word and should take string as input and return string as output.

  Kata Link:
    https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript
*/

function dropCap(n) {
  return n.replace(/\w{3,}/g, (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  });
}
