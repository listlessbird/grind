/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  const sumMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]
    if (sumMap.has(comp)) {
      console.log("map", sumMap)
      return [sumMap.get(comp), i]
    }

    sumMap.set(nums[i], i)
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))
