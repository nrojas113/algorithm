/*INSERTION SORT
A sorting algorithm where it builds up
the sort by gradually creating a larger
left half which is always sorted

(Playing a card game! - insert elements in place)

Insertion sort method works by building
up a sorted array at the beginning of the list.
It begins the sorted array with the first element.
Then it inspects the next element and
swaps it backwards into the sorted array
until it is in sorted position.
It continues iterating through the list
and wapping new items backwards into the
sorted portion until it reaches the end.


input : [5,3,4,1,2]
output : [1,2,3,4,5]

1st loop
[5,3,4,1,2] -> target: 3, sorted portion of array: [5] => move 3 to index 0
[3,5,4,1,2] -> target: 4, sorted portion of array: [3, 5] => move 4 to index 1
[3,4,5,1,2] -> target: 1, sorted portion of array: [3, 4, 5] => move 1 to index 0
[1,3,5,4,2] -> target: 2, sorted portion of array: [1, 3, 4, 5] => move 2 to index 1
[1,2,3,5,4] -> once hit the end, swap min to beginning

* build up the sorted array by inserting one item at a time in a correct place.
* Instead of swapping, shifting the item to the right (key difference!)

Approach:
1. Start by storing the second element in the array (first element is assumed sorted)
2. Compare the second element with the one before it and shift to the left if necessary
   left is where the second element was, overwrite it (second element is already stored)
3. Continue to the next element and if it is in the incorrect order,
   iterate through the sorted portion (i.e. the left side)
   to place the element in the correct place.
4. Repeat until the array is sorted

*/

function insertionSort(arr) {
  //Iterate over each item (Start with 1st index)
  for (let i = 1; i < arr.length; i++) {
    //Store the current value to a variable so we don't lose it
    let currentValue = arr[i];
    //We want to compare i (current value) to the previous item, so i - 1
    let j = i - 1;
    //Start comparing from end to beginning:
    //While j is greater than or equal to 0 (havent reach the beginning of the array yet)
    //& item we have (at index j) is greater than current value,
    //we need to shift the item to the right
    while (j >= 0 && arr[j] > currentValue) {
      //Copy the element to the right (forward)
      arr[j + 1] = arr[j];
      //Repeat this copying process at each element (moving toward the beginning)
      j--;
      //until it reached the beginning or if currentValue is greater than j element
    }
    //When breaking out of the loop, it means we found the correct spot,
    //so insert the current value to the index position we found during loop.
    arr[j + 1] = currentValue;
  }
  return arr;
}

/*
Time Complexity:
best case - O(n)  (iteration o(n), shifting items o(1))
worst case - O(n^2)  (iteration o(n), shifting items o(n))
as array of length grows, need to make n^2 number of comparison


Insertion is good at inserting thing in appropriate place (coming in live)
*/
