/* COUNT UNIQUE VALUES

Prompt: create function that accepts a sorted array
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted

Example:
countUniqueValues([1,1,1,2]) => 2
countUniqueValues([1,2,3,4,4,5,12,12,13]) => 7
countUniqueValues([]) => 0
countUniqueValues([-2,-1,-1,0,1]) => 4
*/

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  //pointer 1 : i
  //pointer 2 : j
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    //if index of i is not same as index of j
    //move the i up by 1, and replace that ith index value to jth index value
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //build up the array until j reach the length of array
  //i only moves when i and j is not equal.
  //return index i + 1 (because i started with 0)
  return i + 1;
};

//time complexity: O(n) => n is the length of the array
