/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const left = new Array(nums.length).fill(0)
  const right = new Array(nums.length).fill(0)

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] + nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] + nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    if (left[i] === right[i]) return i
  }

  return -1
}
/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function pivotIndex2(nums) {
  const ts = nums.reduce((acc, curr) => acc + curr, 0)
  let ls = 0

  for (let i = 0; i < nums.length; i++) {
    const rs = ts - ls - nums[i]

    if (ls === rs) return i

    ls += nums[i]
  }
  return -1
}

console.log(pivotIndex2([-1, -1, 0, 0, -1, -1]))
console.log(pivotIndex2([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex2([2, 1, -1]))
