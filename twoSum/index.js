/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let i2 = i + 1; i2 < nums.length; ++i2) {
//       if (nums[i] + nums[i2] === target) {
//         return [i, i2];
//       }
//     }
//   }
// };

const twoSum = (nums, target) => {
  const map = new Map()

  for(let i = 0; i < nums.length; ++i){
    const difference = target - nums[i]
  
    if(map.has(difference)){
      return [nums.indexOf(difference), i]
    }
   
    map.set(nums[i], true)
    console.log(map)
  }
};

module.exports = twoSum;
