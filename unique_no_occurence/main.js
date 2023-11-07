/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurences(arr) {
  const mp = new Map()

  const dp = new Set()

  for (let i = 0; i < arr.length; i++) {
    mp.set(arr[i], mp.get(arr[i]) + 1 || 1)
  }

  const v = Array.from(mp.values())

  for (let i = 0; i < v.length; i++) {
    if (dp.has(v[i])) return false

    dp.add(v[i])
  }

  console.log({ mp, v })

  return true
}

console.log(uniqueOccurences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
console.log(uniqueOccurences([1, 2]))

function uniqueOccurences2(arr) {
  const mp = new Map()
  for (let num of arr) {
    mp.set(num, mp.get(num) + 1 || 1)
  }

  return new Set(mp.values()).size === new Set(mp.keys()).size
}

console.log(uniqueOccurences2([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
console.log(uniqueOccurences2([1, 2]))
