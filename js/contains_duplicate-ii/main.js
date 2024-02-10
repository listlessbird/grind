/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {

  const mp = new Map()

  for (let i = 0; i < Math.min(k, nums.length); i++) {
    if (mp.has(nums[i])) {
      console.log({ mp, curr: nums[i], i })
      return true
    }
    mp.set(nums[i], i)
  }

  for (let i = k; i < nums.length; i++) {
    if (mp.has(nums[i])) {
      const c = Math.abs(i - mp.get(nums[i]))
      console.log({ mp, n: nums[i], i, c, k })
      if (c <= k) return true
    }
    mp.delete(nums[i - k])
    mp.set(nums[i], i)
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([1, 2, 1], 0))
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15))
