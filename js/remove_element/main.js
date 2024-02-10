/**
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 * */
function removeElement(nums, val) {
  let swpctr = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[swpctr] = nums[i]
      swpctr++
    }
  }

  return swpctr
}

const cases = {
  nums: [[0, 1, 2, 2, 3, 0, 4, 2], [3, 2, 2, 3], [1], [4, 5]],
  vals: [2, 3, 1, 5],
}

function runAll() {
  for (let i = 0; i < cases.nums.length; i++) {
    const nums = cases.nums[i]
    const val = cases.vals[i]
    console.log(`Test Case ${i + 1}:`)
    console.log(`Input: nums = ${JSON.stringify(nums)}, val = ${val}`)
    console.log(`Output: ${removeElement(nums, val)}`)
    console.log(`Modified nums: ${JSON.stringify(nums)}`)
    console.log()
  }
}

function runSpecific(s_case, s_num) {
  const num = cases.nums[s_num]
  const val = cases.vals[s_case]
  console.log(`Input: nums = ${JSON.stringify(num)}, val = ${val}`)
  console.log(`Output: ${removeElement(num, val)}`)
  console.log(`Modified nums: ${JSON.stringify(num)}`)
  console.log()
}

// runSpecific(3, 3)
runAll()
