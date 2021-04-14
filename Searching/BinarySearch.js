/*BINARY SEARCH

Benefits of Binary search:
-binary search ia a much faster form of search
-Rather than eliminating one element at a time,
you can eliminate half of the remaining elements at a time
-Binary search only works on sorted arrays

Approach:
Divide and Conquer

Prompt: write a function accepts an array and a value
that finds if element exists in the array.
If exists, return the index, if not, return -1
*/

const binarySearch = (arr, value) => {
  //create a start pointer at the start of the array
  let start = 0;
  //create a end pointer at the end of the array
  let end = arr.length - 1;
  //create a pointer in the middle
  let middle = Math.ceil((start + end) / 2);

  //while the middle index is not the value
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      //if the value is less than middle value,
      //than change the end pointer to the middle value - 1 (cuts searching area to half)
      end = middle - 1;
    } else {
      //if the value is more than middle value,
      //than change the start pointer to the middle value + 1 (cuts searching area to half)
      start = middle + 1;
    }
    //recalculate the middle value
    middle = Math.ceil((start + end) / 2);
  }
  //if the element in the middle is the value, return the middle index
  // otherwise if you never find the value, return -1
  if (arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
};

/*
Time Complexity:
Best case - O(1) - it's possible if our value is in the middle, returns immediately
Worse case - O(log N)
why log N ?
   if we have 16 elements in the array, we find the answer in 4 steps
   if we have 32 elements in the array, we find teh answer in 5 steps
   because we are cutting the searching area in half everytime
   log base of 2 to N (2 to what power give us N ? )
*/
