/*SPIRAL TRAVERSE

Prompt: Write a function that takes in an n x m two-dimentional array
(that can be square-shaped when n === m) and returns a one-dimensional array
of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimentional array,
goes to the right, and proceeds in a spiral pattern all the way until
every element has been visited.


input :
array = [
  [1,2, 3, 4],
  [12,13,14,5],
  [11,16,15,6],
  [10,9,8,7]
]

output :
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


Approach:
1. Create variables to keep track of following ;
   - Start Row
   - End Row
   - Start Column
   - End Column
2. To get all the values for the starting row :
   Iterate through all the columns (between start column & end columns),
   at each column add to final array, the value in the array at the
   starting row, until the ending column.
3. To get all the values for ending column :
   Iterate from starting row + 1 (don't include the first row),
   go all the way until ending row, and add the values at each column
4. To get all the values for the ending row :
   Iterate from ending column - 1, iterate all the way back to the starting column,
  and add all the elements.
5. To get all the values for the starting column :
   iterate from ending row - 1 all the way to starting row + 1 (to avoid double counting)
  and all the values while iterating.
6. Once get to the point, we got all the numbers for outer perimeters
7. Repeat the process for the inner array.
   Move the starting row, ending row, starting column, and ending row toward inside.


*/

// array = [
//   [1,2, 3, 4],
//   [12,13,14,5],
//   [11,16,15,6],
//   [10,9,8,7]
// ]

function spiralTraverse(array) {
  let resultsArr = [];

  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //top row (move right)
    for (let i = startCol; i <= endCol; i++) {
      resultsArr.push(array[startRow][i]);
    }
    startRow++;

    //right column (move down)
    for (let i = startRow + 1; i <= endRow; i++) {
      resultsArr.push(array[i][endCol]);
    }
    endCol--;

    //bottom row (move left)
    for (let i = endCol; i >= startCol; i--) {
      resultsArr.push(array[endRow][i]);
    }
    endRow--;

    //start column (move up)
    for (let i = endRow; i >= startRow; i--) {
      resultsArr.push(array[i][startCol]);
    }
    startCol++;
  }

  return resultsArr;
}

/*
Time Complexity: O(n) where N is the length of the array
Space Complexity: O(n) where n is the length of the array

*/
