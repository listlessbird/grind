/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
  let [left, right] = [0, numbers.length - 1]

  while (numbers[left] + numbers[right] !== target) {
    // array is sorted

    if (numbers[left] + numbers[right] > target) {
      right--
    } else if (numbers[left] + numbers[right] < target) {
      left++
    }
  }

  return [left + 1, right + 1]
}

const n = [2, 7, 11, 15]

console.log(twoSum(n, 9))
