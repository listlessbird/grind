/**
 *  @param {number[]} nums
 *  @returns {number}
 */
function removeDuplicates(nums) {
  let traversePointer = 1
  let uniqIndexPointer = 1

  const isUnique = (a, b) => a !== b

  for (let i = 0; i < nums.length; i++) {
    if (traversePointer >= nums.length) break
    if (!isUnique(nums[traversePointer], nums[traversePointer - 1])) {
      traversePointer++
    } else {
      nums[uniqIndexPointer] = nums[traversePointer]
      uniqIndexPointer++
      traversePointer++
    }
  }
  console.log(nums)
  return uniqIndexPointer
}

let case_1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let case_2 = [1, 1, 2]
console.log(removeDuplicates(case_1))
