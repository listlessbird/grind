/**
 *  @param {string} s
 *  @returns {number}
 */

function firstUniqChar(s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], { index: i, count: 0 })
    } else {
      map.set(s[i], { index: i, count: map.get(s[i]).count + 1 })
    }
  }
  for (let [k, v] of map) {
    if (!v.count) {
      return v.index
    }
  }

  return -1
}

console.time("run")
console.log(firstUniqChar("loveleetcode"))
console.timeEnd("run")
