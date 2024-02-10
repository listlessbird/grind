/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
  const set = new Set(nums)
  let score = 0

  for (let num of [...set]) {
    const prev = num - 1
    if (set.has(prev)) continue

    let curr = num
    let currScore = 1
    const isStreak = () => set.has(curr + 1)

    while (isStreak()) {
      curr++
      currScore++
    }
    score = Math.max(score, currScore)
  }

  return score
}

const v = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(v))
