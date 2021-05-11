/*
MINIMUM WAITING TIME

Write a function that returns minimum amount of total waiting time for all the queries.
Example:
input: [3,2,1,2,6]
output: 17

Approach: Greedy algorithm. The largest number should come last
because large number consumes more time.
1. Sort the array in place
2. iterate through the array and add the
*/

function minimumWaitingTime(queries) {
  let sortedQueries = queries.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < sortedQueries.length; i++) {
    let currentNum = sortedQueries[i];
    let numElements = sortedQueries.length - (i + 1);
    total += currentNum * numElements;
  }
  return total;
}
