/* POWER
Prompt: Write a function called power which accepts a base and an exponenet.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()
Do not worry about negative bases and exponents

Example:
power(2,0) => 1
power(2,2) => 4
power(2,4) => 16
*/

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
  //power(2, 4)
  // => 16
  //2 * power (2, 3)
  //             8
  //      2 * power (2, 2)
  //                4
  //           2 * power (2, 1)
  //                     2
  //                  2 * power (2, 0)
  //                            1
};

/* PRODUCT OF ARRAY
Prompt: Write a function which takes in an array of numbers and returns the product of them all (multiplied sum of all)

Example:
productOfArray([1,2,3]) => 6
productOfArray([1,2,3,10]) => 60
*/
const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] * productOfArray(arr.slice(1));
  //pro([1,2,3,10])
  //=> 60
  //1 * pro([2,3,10])
  //           60
  //     2 * pro([3,10]
  //            30
  //          3 * pro([10])
  //                 10
  //              10 * pro([])
  //                    1
};
