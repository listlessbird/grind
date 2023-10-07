/**
 *  @param {number[]} nums
 *  @param {number} n
 *  @returns {number[]}
 * */

function shuffle(nums, n) {
  const newArr = []
  for (let i = 0; i < n; i++) {
    newArr.push(nums[i], nums[i + n])
  }
  return newArr
}

const cases = {
  nums: [[2, 5, 1, 3, 4, 7]],

  n: [3],
}

function runSpecific(s_num, s_case) {
  const num = cases.nums[s_num]
  const n = cases.n[s_case]
  console.log(`Input: nums = ${JSON.stringify(num)}, n = ${n}`)
  console.log(`Output: ${shuffle(num, n)}`)
  console.log(`Modified nums: ${JSON.stringify(num)}`)
  console.log()
}

runSpecific(0, 0)
