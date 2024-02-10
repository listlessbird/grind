/* 
https://leetcode.com/problems/product-of-array-except-self/
*/
/**
 * @param {number[]} nums
 * @returns {number[]}
 */

function productExceptSelf(nums) {
  const prefixArr = []
  const suffixArr = []
  const selfArr = []

  prefixArr[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const s = prefixArr[i - 1] * nums[i]
    prefixArr.push(s)
  }

  suffixArr[nums.length - 1] = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    const element = nums[i] * suffixArr[i + 1]
    suffixArr[i] = element
  }

  selfArr[0] = suffixArr[1]
  for (let i = 1; i <= nums.length - 1; i++) {
    let s = prefixArr[i - 1] * suffixArr[i + 1]
    if (i === nums.length - 1) s = prefixArr[i - 1]
    selfArr[i] = s
  }

  console.log({ nums, prefixArr, suffixArr, selfArr })
  return selfArr
}

// console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([2, 3, 4, 5]))
// console.log(productExceptSelf([4, 3, 2, 1, 2]))

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 * The O(1) space complexity solution without considering the array returned
 */
function productExceptSelfOn(nums) {
  let pf = 1
  let pr = 1
  const self = Array(nums.length).fill(1)
  console.log("\n")
  // self[0] = pr
  for (let i = 0; i < nums.length; i++) {
    console.log({ pr, i, self, nums })
    self[i] = pr
    pr = nums[i] * pr
  }
  console.log({ prefixArr: self })
  console.log("Computing postfix..")

  // self[nums.length - 1] *= pf

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log({ pf, i, self, nums })
    self[i] = self[i] * pf
    pf = nums[i] * pf
  }
  console.log({ nums, self })

  return self
}

// console.log(productExceptSelfOn([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
console.log(productExceptSelfOn([-1, 1, 0, -3, 3]))
// console.log()
