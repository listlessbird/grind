/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  const { max } = Math
  let maxSum = nums[0]
  let maxTill = 0
  for (let num of nums) {
    
    maxTill = max(maxTill, 0)
    maxTill += num

    maxSum = max(maxSum, maxTill)
  }

  return maxSum
}

console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-1]))
