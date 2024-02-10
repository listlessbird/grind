/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let currMax = sum

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k]
    currMax = Math.max(sum, currMax)
  }

  return currMax / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
