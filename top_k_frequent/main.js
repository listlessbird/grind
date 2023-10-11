/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */

function topKFrequent(nums, k) {
  const mp = new Map()
  const arr = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], mp.get(nums[i]) + 1 || 1)
    arr[i] = []
  }
  console.log(mp)

  mp.forEach((val, key) => {
    if (!arr[val]) {
      arr[val] = []
    }

    arr[val].push(key)
  })
  const res = []
  console.log(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) {
      res.push(...arr[i])
    }

    if (res.length === k) return res
  }
  return []
}

// console.log(topKFrequent([3, 1, 1, 1, 2, 2], 2))
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

/**
 * Used the bucket sort algorithm
 * After counting occurrences I considered the length of arr as occurrences
 * and pushed the elements that occur that much to that position
 * and then I've grabbed the most occurring elements from the right most of the array
 */
