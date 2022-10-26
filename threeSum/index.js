/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
  const results = [];

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    const difference = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum > difference) {
        r--;
      } else if (sum < difference) {
        l++;
      } else {
        results.push([nums[i], nums[l], nums[r]]);
      }
    }
  }

  return results;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
