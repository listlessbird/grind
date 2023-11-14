/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
  let count = 0
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  if (sum / k >= threshold) {
    count++
  }

  for (let i = k; i < arr.length; i++) {
    const newWel = arr[i]
    const replaced = arr[i - k]

    sum -= replaced
    sum += newWel
    if (sum / k >= threshold) {
      count++
    }
  }

  return count
}

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5))
