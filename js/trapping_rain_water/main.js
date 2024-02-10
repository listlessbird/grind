/**
 * @param {number[]} height
 * @returns {number}
 */

function trap(height) {
  // find the maxLeft and maxRight at each i
  // the amount of water that can be trapped would be the min of the ^ and h[i]

  const maxLeft = []
  const maxRight = []

  //  arr with min(maxLeft[i], maxRight[i])

  const minArr = []

  let trap = 0

  let localMax = -Infinity

  for (let i = 0; i < height.length; i++) {
    localMax = Math.max(localMax, height[i])
    maxLeft.push(localMax)
  }

  localMax = -Infinity

  for (let i = height.length - 1; i >= 0; i--) {
    localMax = Math.max(localMax, height[i])
    maxRight[i] = localMax
  }

  for (let i = 0; i < height.length; i++) {
    minArr[i] = Math.min(maxLeft[i], maxRight[i])

    const trapped = Math.max(0, minArr[i] - height[i])

    trap += trapped
  }
  //     console.log({
  //       h: height[i],
  //       lmax: maxLeft[i],
  //       rmax: maxRight[i],
  //       min: minArr[i],
  //       trap,
  //     })
  //   }

  console.log({ height, maxLeft, maxRight, minArr, trap })

  return trap
}

/**
 * @param {number[]} height
 * @returns {number}
 */

function trap2(height) {
  let l = 0
  let r = height.length - 1

  let maxL = height[0]
  let maxRight = height[height.length - 1]

  let trap = 0

  while (l < r) {
    /**
     * here the smallest max will be the bottleneck
     */
    if (maxL < maxRight) {
      l++
      maxL = Math.max(maxL, height[l])
      trap += Math.max(0, maxL - height[l])
      // update the small pointer
    } else {
      r--
      maxRight = Math.max(maxRight, height[r])
      trap += Math.max(0, maxRight - height[r])
    }
  }

  return trap
}

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap2(heights))
