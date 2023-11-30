/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const set = new Set()
  let left = 0
  let right = 0
  let longest = 0

  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }

    set.add(s[right])

    longest = Math.max(longest, right - left + 1)
    right++
  }
  return longest
}

console.log(lengthOfLongestSubstring("dvdf"))

