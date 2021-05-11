/*
Given the list of IDs, which contains many duplicate integers and one unique integer, find the unique integer.


*/

//[1,1,2,2,3,3,4]
function findUniqueNum(arr) {
  let memo = {};

  //memo={1: 2, 2: 2, 3: 2, 4: 1}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (memo[num]) {
      memo[num]++;
    } else {
      memo[num] = 1;
    }
  }

  let memoArr = Object.entries(memo);
  //memoArr = [[1, 2], [2, 2]]
  for (const [key, value] of memoArr) {
    if (value === 1) {
      return key;
    }
  }
  return;
}

/*Time complexity: O(n)
Space Complexity: O(n)
*/
