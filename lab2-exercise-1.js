const assert = require('assert');

// Task: Complete the function that takes in an array and the missing numbers for a complete number sequence
// E.g. input = [3, 7, 1], output should be [2, 4, 5, 6]

const findMissingNumber = (arr) => {
  // Add your code here
  let max = arr[0]
  let min = arr[0]
  let tempResultArray = []

  for (let i =0; i<arr.length; i++)
  {
    if (arr[i] > max)
      max = arr[i]
    if (arr[i] < min)
      min = arr[i] 
  }

  for (let j=min; j < max; j++)
  {
    if (arr.indexOf(j) === -1)
    {
      tempResultArray.push(j)
    }
  }

  return tempResultArray
  
}

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(findMissingNumber([3, 7, 1]), [2, 4, 5, 6], "Test case 1 output is wrong.")
assert.deepStrictEqual(findMissingNumber([2, 8, 0]), [1, 3, 4, 5, 6, 7], "Test case 2 output is wrong.")
assert.deepStrictEqual(findMissingNumber([1, 2]), [], "Test case 3 output is wrong.")
console.log("All test cases passed.")




