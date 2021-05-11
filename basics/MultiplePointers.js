/* AVERAGE PAIR

Prompt: Write a function that given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals
the target average. There may be more than one pair that matches the average target.

Example:
averagePair([1,2,3], 2.5) => true
averagePair([1,3,3,5,6,7,10,12,19], 8) => true
averagePair([-1,0,3,4,5,6], 4.1) => false
averagePair([], 4) => false
*/

function averagePair(arr, targetAverage) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currentAverage = (arr[left] + arr[right]) / 2;
    if (currentAverage === targetAverage) {
      return true;
    } else if (currentAverage < targetAverage) {
      left++;
    } else {
      right++;
    }
  }
  return false;
}

/* IS SUBSEQUENCE

Prompt: Write a function which takes in two strings and checks
whether the characters in the first string form a subsequence of the
characters in the second string.
In other words, the function should check whether the characters
in the first string appear somewhere in the second string, without their order changing

Example:
isSubsequence('hello', 'hello world') => true
isSubsequence('sing', 'sting') => true
isSubsequence('abc', 'abracadabra') => true
isSubsequence('abc', 'acb') => false (order matters)
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (str1)
    while (j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
      }
      if (i === str1.length) {
        return true;
      }
      j++;
    }
  return false;
}

function isSubsequence2(array, sequence) {
  let i = 0;
  let j = 0;
  while (i < array.length && j < sequence.length) {
    if (array[i] === sequence[j]) {
      j++;
    }
    i++;
  }
  if (j === sequence.length) {
    return true;
  } else {
    return false;
  }
}

/*
Time complexity:
O(N) N is length of main array

Space complexity:
O(1) constant, because we are not storing any big data
(doesn't increase in size in respect to the input size)
*/

/*PALINDROME CHECK

prompt: write a function that takes in a non-empty string and that
 returns a boolean representing whether the string is a palindrome.
 A palindrome is defined as a string that's written the same forward
 and backward. note that single-character strings are palindromes.

 Example:
 isPalindrome('hello') => false
 isPalindrome('elle') => true
*/

//Approach2: O(n) time | O(1) space
function isPalindrome2(string) {
  //define two pointers (start & end)
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  //while left & right doesn't go over each other
  //check if both of current pointer's values are equal to eachother.
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) {
      //if not equal, return false
      return false;
    }
    //otherwise, update both left & right pointer to repeat again
    leftIdx++;
    rightIdx--;
  }

  //if breakout of loop, means all the values were equal, so return true
  return true;
}
