/** Two Sorted Sum **
 *
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array.
 *
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 *
 */

// const twoSortedSum = (nums, target) => {
//   const map = new Map();
//   for (let i = 0; i < nums.length; ++i) {
//     const difference = target - nums[i];
//     if (map.has(difference)) {
//       return [nums.indexOf(difference), i];
//     }
//     map.set(nums[i], true);
//   }
// };

// const twoSortedSum = (nums, target) => {
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = i; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

const twoSortedSum = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r] 

    if (sum > target) {
      r--;
    }
    else if (sum < target) {
      l++
    }
     else {
      return [l, r];
    }
  }
};

module.exports = twoSortedSum;
