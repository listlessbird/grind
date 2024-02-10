/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
  const vowels = new Set("aeiou")

  let _v = 0
  for (let i = 0; i < k; i++) {
    if (!vowels.has(s[i])) continue
    _v++
  }
  let nv = _v

  for (let i = k; i < s.length; i++) {
    const newWindowEl = s[i]
    const replaced = s[i - k]

    _v -= vowels.has(replaced) ? 1 : 0
    _v += vowels.has(newWindowEl) ? 1 : 0

    nv = Math.max(_v, nv)
  }

  return nv
}

// console.log(maxVowels("leetcode", 3))
// console.log(maxVowels("abciiidef", 3))
console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33))
