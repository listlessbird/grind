/**
 * @param {number[]} height
 * @return {number}
 */
function maxAreaBrute(height) {
  let max = 0

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const w = j - i
      const h = Math.min(height[i], height[j])

      const area = w * h
      max = Math.max(max, area)
    }
  }
  return max
}

/**
 *
 * @param {number[]} height
 * @returns {number}
 */

function maxArea(height) {
  let max = 0

  let l = 0
  let r = height.length - 1

  while (l < r) {
    const area = (r - l) * Math.min(height[r], height[l])

    max = Math.max(max, area)

    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }

  return max
}

const h = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(h))
