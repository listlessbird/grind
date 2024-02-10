/**
 * @param {number[]} nums
 * @returns {number[][]}
 */

function threesum(nums) {
  const triplets = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    // no need to recompute pairs for the same el since arr is sorted or otherwise
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let target = nums[i]

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const eleft = nums[left]
      const eright = nums[right]
      const sum = eleft + eright + target
      if (sum > 0) {
        right--
        continue
      } else if (sum < 0) {
        left++
        continue
      } else {
        triplets.push([target, eleft, eright])
        right--
        left++
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }
  }

  return triplets
}

const nums = [-1, 0, 1, 2, -1, -4]
const nums2 = [1, -1, -1, 0]
const nums3 = [-2, 0, 0, 2, 2]
console.log(threesum(nums3))
