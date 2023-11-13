/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const set = new Set()

  
  for (let i = 0; i < k; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }

  for (let i = k; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.delete(nums[i - k])
    set.add(nums[i])
  }
  console.log({ set })
  return false
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([1, 2, 1], 0))
