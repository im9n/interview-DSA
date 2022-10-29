/** Flatten Array **
 *
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array.
 *
 *
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 *
 */

const flatten = (nums) => {
  const results = [];

  flattenHelper(nums)

  function flattenHelper(nums) {
    for (elem of nums) {
      if (Array.isArray(elem)) {
        flattenHelper(elem);
      } else {
        results.push(elem);
      }
    }
  }

  return results
};

module.exports = flatten;
