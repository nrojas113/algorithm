/* SAME FREQUENCY

Prompt: Given two positive integers, write a function
to find out if the two numbers have the same frequency of digits.

Examples:
sameFrequency(182, 281) => true
sameFrequency(34, 14) => false
sameFrequency(3589578, 5879385) => true
sameFrequency(22, 222) => false

*/

const sameFrequency = (num1, num2) => {
  let strNum1 = String(num1);
  let strNum2 = String(num2);
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < strNum1.length; i++) {
    let key = strNum1[i];
    obj[key] ? (obj[key] += 1) : (obj[key] = 1);
  }

  for (let i = 0; i < strNum2.length; i++) {
    let key = strNum2[i];
    if (!obj[key]) {
      return false;
    } else {
      obj[key] -= 1;
    }
  }
  return true;
};

//time complexity: O(N)

/* ARE THERE DUPLICATES

Prompt: Write a function that accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter patter OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) => false
areThereDuplicates(1, 2, 2) => true
areThereDuplicates('a', 'b', 'c', 'a') => true

*/

function areThereDuplicates(...args) {
  const counter = {}; //counter = { '1': 1, '2': 2}
  for (let i = 0; i < args.length; i++) {
    counter[args[i]] ? (counter[args[i]] += 1) : (counter[args[i]] = 1);
  }
  for (let key in counter) {
    if (counter[key] !== 1) {
      return true;
    }
  }
  return false;
}

//time complexity: O(N)
//space complexity: O(N)
