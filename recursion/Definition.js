/*
Recursion definition:
A process that calls itself

the call stack:
any time a function is invoked it is placed (pushed) on the top of the call stack
When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)
When we write recursive functions, we keep pushing new functions onto the call stack

Two essential parts of a recursive function
-base case (the condition when the recursion ends)
-different input
*/

//BASIC RECURSION
const sumRange = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
};

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

/*Pure Recursion Tips
For arrays, use methods like slice, the spread oeprator,
and concat that makes copies of arrays so you do not mutate them
*/
