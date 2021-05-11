/*
REVERSE
prompt: write a function which accepts a string and returns a new string in reverse
Example:
reverse('awesome') => 'emosewa'
reverse('hello') => 'olleh
*/

const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }
  let lastElem = str[str.length - 1];
  let restElem = str.slice(0, str.length - 1);
  return lastElem + reverse(restElem);
};

/*PALINDROME CHECK
prompt: write a function that takes in a non-empty string and that
 returns a boolean representing whether the string is a palindrome.
 A palindrome is defined as a string that's written the same forward
 and backward. note that single-character strings are palindromes.

 Example:
 isPalindrome('hello') => false
 isPalindrome('elle') => true
*/

//Approach 1: O(n) time | 0(n) space
function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  }
  if (string.length === 2 && string[0] === string[1]) {
    return true;
  }

  let firstChar = string[0];
  let lastChar = string[string.length - 1];
  if (firstChar !== lastChar) {
    return false;
  }
  let restChars = string.slice(1, string.length - 1);
  return isPalindrome(restChars);
}
