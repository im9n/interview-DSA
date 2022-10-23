/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
 */

const maxSubArray = (nums) => {
  let maxSum = 0;

  if (nums.length < 2) {
    return nums[0];
  }

  for (let i = 0; i < nums.length - 1; ++i) {
    let sum = 0
    for (let j = i; j < nums.length; ++j) {
      sum += nums[j]
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
