/*QUICK SORT

Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.


In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and greater than the pivot value.
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
This continues until the base case of an empty or single-item array is reached, which we return.
The unwinding of the recursive calls return as the sorted array.

input :  [5,2,1,8,4,7,6,3]
output : [1,2,3,4,5,6,7,8]


Pick one element from the array
[5,2,1,8,4,7,6,3] -> pivot: 5, move all the numbers that are less than 5 to the left, and more than 5 to right
3,2,1,4,  5,  7,6,8 -> 5 is in correct spot. 5 has index of 4. repeat the process recursively on left & right side !!

3,2,1,4       5,7,6,8
1,2, 3,  4     5, 6 , 7, 8
*/

/*
STEP 1: WRITE PIVOT HELPER FUNCTION

input : [5,2,1,8,4,7,6,3]
output : 4 => index of the correct place of pivot (5)

Purpose:
Function responsible for arranging elements in an array on either side of a pivot
Given an array, this helper function should designate an element as the pivot
It should then rearrange elements in the array so that all values less than
the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
The order of the elments on the either side of the pivot doesn't matter.
The helper should not create new array, do it in place
When complete, helper function should return the index of the pivot

Approach:
1. Write function that accepts three arguments, array, start index, and end index
  (these can default to 0 and the array length minus 1, respectively)
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the array from the start until the end
    - If the pivot is greater than the current element,
      increment the pivot index variable and then swap the current
      element with the element at the pivot index
5. Swap the starting element (i.e. the pivot) with the pivot index
6. Return the pivot index

*/

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  //we are assuming the pivot is always the first element
  let pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i < endIdx; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      //swap
      let temp = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = temp;
    }
  }
  //swap the pivot from the start to the swap point
  let temp = arr[startIdx];
  arr[startIdx] = arr[swapIdx];
  arr[swapIdx] = temp;

  return swapIdx;
}
