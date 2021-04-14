/*BUBBLE SORT
A sorting algorithm where the largest values bubble up to the top

The bubble sort method starts at the beginnign of an
unsorted array and 'bubbles up' unsorted values toward the end, iterating through the aray until it is completely sorted.
Through each iteration, it compaires adjacent items and
swapp them if they are out of order.
The method continues looping through the array until no
swaps occur at whihc point the array is sorted.

1st loop
[5,3,4,1,2]
[3,5,4,1,2]
[3,4,5,1,2]
[3,4,1,5,2]
[3,4,1,2,5] <=last element is in place (bubbled)

2nd loop
[3,4,1,2,5]
[3,1,4,2,5]
[3,1,2,4,5]
[3,1,2,4,5] <=2nd to last element is in place (bubbled)

3rd loop
[3,1,2,4,5]
[1,3,2,4,5]
[1,2,3,4,5] <=3rd last element is in place (bubbled)

Approach:
1. loop over array from end to beginning
2. start inner loop from beginning until i - 1
3. if current num in the index is larger then next num, swap those two
4. Repeat the process until all are sorted
5. Optimize by adding stopping condition when no swaps are happening
*/

function bubbleSort(arr) {
  let noSwaps;

  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap current num & next num (move large num to later)
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
