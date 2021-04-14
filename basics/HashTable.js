/* TWO NUMBER SUM

Prompt: Given an array and target sum, write a function
that if any two numbers in the input array sum up to the target sum,
the function should return them in an array, in any order.

Examples:
twoNumberSum([3,5,-4,8,11,1,-1,6], 10) => [-1,11]
twoNumberSum([3,5,-4], 2) => []
*/

const twoNumberSum = (arr, targetSum) => {
  const nums = {};
  for (let num in arr) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [targetSum - num, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
};

/*

Time complexity:
O(N) time
where N is length of input array
because we are traversing the array only once
at each number we are just calculation against current element
and accessing value in hash table - which is constant time

Space complexity:
O(N) space
where N is length of input array
because we are adding values in hash table

** you can solve this problem more optimally using multiple pointers
by soring the array and using left/right pointers
time complexity: O(N * log(N))
space complexity: O(1)

function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a-b)
	console.log(array)
	let left = 0
	let right = array.length-1
	while (left < right){
		const currentSum = array[left] + array[right]
		if ( currentSum === targetSum){
			return [array[left], array[right]]
		} else if (currentSum < targetSum){
			left++
		} else {
			right--
		}
	}
	return []
}
*/
