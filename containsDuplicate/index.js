/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

// TOP TECH METHOD
//
const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
};

// 80-100k METHOD
//
// const containsDuplicate = (nums) => {
//   const sortedArr = nums.sort((a, b) => a - b);
//   console.log(sortedArr);
//   for (let i = 0; i < sortedArr.length; ++i) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

// BRUTE FORCE METHOD
//
// const containsDuplicate = (nums) => {
//    for(let i = 0; i < nums.length - 1; ++i){
//     for(let j = i + 1; j < nums.length; ++j){
//         if(nums[i] === nums[j]){
//             return true
//         }
//     }
//    }
//    return false
//   };

module.exports = containsDuplicate;
