/*MERGE SORT
A sorting algorithm where it uses a divide-and-conquer,
recursive methodology to sort an array.

It takes advantage of the fasct that it is relatively easy to sort two arrays
as long as each is sorted in the first place. But we'll start with only one
array as input. We can recursively divide the original input in two until we
reach the basecase of an array with one item.
A single-item array is naturally sorted, so then we can start combining.
This combination will unwind the recursive calls that split the original array,
eventually producing a final sorted array of all the elements.

- Recursively split the input array in half until a sub-array with only one element is produced.
- Merge each sorted sub-array together to produce the final sorted array.


input :  [8,3,5,4,7,6,1,2]
output : [1,2,3,4,5,6,7,8]

1. Start by Splitting array in half
[8,3,5,4,7,6,1,2] -> starting point

[8,3,5,4]     [7,6,1,2] -> split in half

[8,3] [5,4]    [7,6]  [1,2] -> split in half

[8] [3] [5] [4] [7] [6] [1] [2] -> split in half until elements in the array

2. merging two sorted array by comparing the first element inside the array & putting inside new array
Take first item, compare to first item in the other array, put the smaller number first inside the new array

[3,8] [4,5]  [6,7] [1,2] -> compare first element, remove, and add in new array

[3,4,5,8]  [1,2,6,7] -> compare first element, remove, and add in new array

[1,2,3,4,5,6,7,8]
*/

/*
STEP 1 : WRITE HELPER FUNCTION FOR MERGING TWO SORTED ARRAYS
input [1,10,50], [2,14,99,100]
output [1,2,10,14,50,99,100]
*/

function mergingSortedArray(arr1, arr2) {
  //create empty array
  let sortedArr = [];

  //define two pointers for each arrays
  let i = 0;
  let j = 0;

  //while there are elements in either arrays, compare & sort
  while (i < arr1.length && j < arr2.length) {
    //if first element in arr1 is less than first element in arr2
    if (arr1[i] < arr2[j]) {
      //remove the element from the beginning, and push that num to new array
      sortedArr.push(arr1[i]);
      //increase the counter in arr1 by 1
      i++;
    } else {
      //if first element in arr2 is less than first element in arr1
      //remove the element from beginning, and push that num to new array
      sortedArr.push(arr2[j]);
      //increase the counter in arr2 by 1
      j++;
    }
  }
  console.log("arr1", arr1, i, arr1.length);
  // => arr1 [ 1, 10, 50 ] 3 3
  console.log("arr2", arr2, j, arr2.length);
  // => arr2 [ 2, 14, 99, 100 ] 2 4  (j hasn't reaced the end yet!!)

  //After breaking out of while loop, either i or j has not reached the end yet.
  //If there are elements left, it means you can just add the rest of the remaining elements (sorted) to the sortedArr.

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  //in this example, only below code will run
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

/*
STEP 2 : WRITE MERGE SORT (COMBINE THE HELPER FUNCTION)
*/

function mergeSort(arr) {
  //base case :
  if (arr.length === 1) {
    return arr;
  }

  //recursive case :
  let firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return mergingSortedArray(firstHalf, secondHalf);
}

/*
Time Complexity:
Best Case - O(n log n)
Worse Case - O(n log n)

* No matter how much the input is (nearly sorted, not sorted), it is always same time complexity.

Decompositions O(log n) :
* log n means 2 of what power gives us n ?
* with 8 elements in a array, 2 and raise it 3 times to get 8.
* As n grows, the number of times we have to split up grows at the rate of log n.

Comparisons Per Decomposition O(n) :
* As n grows, the mergeingSortedArray algorithms itself
 time complexity of O(n) - n comparisons we need to make to merge.
 If 8 elements in the array, we need to make 8 comparisons to merge.

Total O(n log n) :
* So, in total, O(log n) is number of decompositions (as n grows, the number of times
  we split the array grows at the rate of log n), but each time we do split,
  we have o(n) comparison to actually perform the merging.


Space Complexity:
O(n)

* Elementary sorting has constant space complexity, but merge sort,
  as we have a larger array, we have to store more arrays in the memory (takes more space)


*/
