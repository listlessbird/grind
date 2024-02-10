/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const r = []
  r[0] = 0
  for (let i = 1; i < gain.length + 1; i++) {
    console.log({currGain: gain[i], gain, r })
    r[i] = r[i - 1] + gain[i - 1]
  }
  console.log({ gain, r })
  return Math.max(...r)
}
console.log(largestAltitude([-5, 1, 5, 0, -7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))
