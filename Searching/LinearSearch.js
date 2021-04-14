/* LINEAR SEARCH
Prompt: write a function accepts an array and a value
that finds if element exists in the array.
If exists, return the index, if not, return -1

Example:
linearSearch([10,15,20,25, 30], 15) => 1
linearSearch([100], 100) => 0
linearSearch([9,8,7,6], 10) => -1
*/

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

/*
Time complexity: O(N)
where n is array length, as array gets longer, we have to do more search (more time)
*/
