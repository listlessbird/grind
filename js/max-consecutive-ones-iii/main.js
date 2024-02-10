/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (nums[right] === 0) {
      k--
    }

    if (k < 0) {
      if (nums[left] === 0) k++

      left++
    }
    right++
  }

  return right - left
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
