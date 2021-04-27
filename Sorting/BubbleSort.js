/*BUBBLE SORT
A sorting algorithm where the largest values bubble up to the top

The bubble sort method starts at the beginnign of an
unsorted array and 'bubbles up' unsorted values toward the end,
iterating through the aray until it is completely sorted.
Through each iteration, it compaires adjacent items and
swap them if they are out of order.
The method continues looping through the array until no
swaps occur at which point the array is sorted.

input : [5,3,4,1,2]
output : [1,2,3,4,5]

1st loop
[5,3,4,1,2]
[3,5,4,1,2]
[3,4,5,1,2]
[3,4,1,5,2]
[3,4,1,2,5] <=last element is in place (bubbled)

2nd loop
[3,4,1,2,5]
[3,1,4,2,5]
[3,1,2,4,5] <=2nd to last element is in place (bubbled)

3rd loop
[3,1,2,4,5]
[1,3,2,4,5]
[1,2,3,4,5] <=3rd last element is in place (bubbled)

Approach:
1. loop over array from beginning to end
2. start inner loop from beginning until end - i
   (because at each iteration, the end value is in place)
3. if current num in the index is less then previous num,
   swap those two
4. Repeat the process until iteration reaches the end point
5. Optimize by adding stopping condition when no swaps
   are happening

*/

function bubbleSort(arr) {
  let noSwaps;
  //keep track of which iteration we are on
  for (let i = 0; i < arr.length; i++) {
    //in the beginning, we assume that there are no swaps every time through
    //reset the noSwaps status to true everytime
    noSwaps = true;
    //iterate from first index (2nd item) and continue the
    //loop until i'th to the last element.
    //because we know that at each iteration, largest number
    //bubbled at to the end, so no need to check the end.
    for (let j = 1; j < arr.length - i; j++) {
      //compare second item to previous item
      if (arr[j] < arr[j - 1]) {
        //swap current num & previous num (move large num to later)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        //another way to swap
        //[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        //if this loop was triggered, swap happened so set to false.
        //this will continue to be false as long as swaps are happening
        noSwaps = false;
      }
    }
    //if swaps happened, noSwap is false so continue the loop.
    //if no swaps happened, noSwap is true (didn't change) so break out of the whole loop
    if (noSwaps) break;
  }
  return arr;
}

/*
Time complexity :
best case - O(n)
worst case - O(n^2)
Because we have nested loop, and we are making roughly making a comparison,
for each item in that array, we are making N number of comparisons.
If data is nearly sorted or sorted already, then it will be O(n) - linear time
If we know that the data is nearly sorted, then bubble sort could be good.

*/
