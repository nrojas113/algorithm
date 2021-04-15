/*SELECTION SORT
A sorting algorithm where the small values are placed into sorted position

Selection sort works by selecting the minimum value in a list and swapping
it with the first value in the list.
It then starts at the second position,
selects the smallest value in the remaining list,
and swaps it with the second element.
It continues iterating through the list
and swapping elements until it reaches
the end of the list.
Now the list is sorted.
 Selection sort has quadratic time complexity in all cases.


input : [5,3,4,1,2]
output : [1,2,3,4,5]

1st loop (0th index - 5)
[5,3,4,1,2] -> set min to index 0 = min 5
[5,3,4,1,2] -> min vs 3 = min 3
[5,3,4,1,2] -> min vs 4 = min 3
[5,3,4,1,2] -> min vs 1 = min 1
[5,3,4,1,2] -> min vs 2 = min 1
[1,3,4,5,2] -> once hit the end, swap min to beginning

2nd loop (1th index - 3)
[1,3,4,5,2] -> set min to index 1 = min 3
[1,3,4,5,2] -> min vs 4 = min 3
[1,3,4,5,2] -> min vs 5 = min 3
[1,3,4,5,2] -> min vs 2 = min 2
[1,2,4,5,3] -> once hit the end, swap min to where loop started

2nd loop (2th index - 4)
[1,2,4,5,3] -> set min to index 2 = min 4
[1,2,4,5,3] -> min vs 5 = min 4
[1,2,4,5,3] -> min vs 3 = min 3
[1,2,3,5,4] -> once hit the end, swap min to where loop started

3nd loop (3th index - 5)
[1,2,3,5,4] -> set min to index 3 = min 5
[1,2,3,5,4] -> min vs 4 = min 4
[1,2,3,4,5] -> once hit the end, swap min to where loop started

Approach:
1. loop over array from beginning to the end
2. make the first element as the minimum
3. loop over array from end to beginning
4. create inner loop that compare all numbers vs min
5. if number is smaller than min, designate the smaller number to
   be the new min and continue until the end of array
6. if the min is not the value (index) you initially began with,
   then swap the two values.
7. repeat this with the next element until the array is sorted
8. shrink the scope to begin the next index element
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //set the current position as smallest number
    let min = i;
    //compare one higher than whatever the i is at each turn
    for (let j = i + 1; j < arr.length; j++) {
      //if the value is less than min, set min value to that index
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    //as long as i is not min, swap them (if i is min, no need to swap - same position)
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

/*
Time complexity:
worst case - O(n^2)
roughly, we have to compare every element
to every other element in the array.
As the length of array grows, the number of comparisons grows,
roughly at the rate of n * n.
Technically, the scope shrinks each loop, but that doesn't really matter, it is drastically worse than we only had to make
single comparison.

*/
