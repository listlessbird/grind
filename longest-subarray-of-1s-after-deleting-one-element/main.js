/**
 * @param {number[]} nums
 * @return {number}
 */

function longestSubarray(nums) {
  let longest = 0
  let zeroes = 0
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (!nums[right]) {
      zeroes++
    }

    while (zeroes > 1) {
      zeroes -= nums[left] === 0 ? 1 : 0
      left++
    }

    longest = Math.max(right - left, longest)
    right++
  }
  return longest
}

console.log(longestSubarray([1, 1, 0, 1]))
