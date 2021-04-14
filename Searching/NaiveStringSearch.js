/* NAIVE STRING SEARCH
Prompt: Write a function that takes in two strings,
and returns the count for number of matches

example:
stringSearch('wowomgzomg', 'omg') => 2
*/

const stringSearch = (longStr, shortStr) => {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};
