/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */

function searchMatrix(matrix, target) {
  const rows = matrix.length

  const cat = []

  // flatten rows ? this will give a sorted array too
  //  Maybe without arr methods

  for (let i = 0; i < matrix.length; i++) {
    cat.push(...matrix[i])
  }

  const found = binarySearch(cat, target)

  console.log({ rows, cat, found })

  return found >= 0
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

function binarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    console.log({ mid: arr[mid], l: arr[l], r: arr[r], target, arr })

    if (arr[mid] > target) {
      r = mid - 1
    } else if (arr[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

const m = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]
const t = 3

const m2 = [[1]],
  t2 = 1

console.log(searchMatrix(m2, t2))
