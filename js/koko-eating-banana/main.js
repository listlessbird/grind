/**
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */

function minEatingSpeedBrute(piles, h) {
  let kMin = 1
  let kMax = Math.max(...piles)

  let minRateTakenToEat = Infinity

  console.log({ kMin, kMax })

  for (let i = kMin; i <= kMax; i++) {
    let hoursNeeded = 0
    for (let j = 0; j < piles.length; j++) {
      const v = Math.ceil(piles[j] / i)
      hoursNeeded += v
      console.log({ p: piles[j], i, v, c: hoursNeeded })
    }
    if (hoursNeeded <= h) {
      minRateTakenToEat = Math.min(minRateTakenToEat, i)
    }
  }
  console.log(minRateTakenToEat)
  return minRateTakenToEat
}
;(piles = [3, 6, 7, 11]), (h = 8)
;(piles2 = [30, 11, 23, 4, 20]), (h2 = 5)
console.log(minEatingSpeedBrute(piles2, h2))
