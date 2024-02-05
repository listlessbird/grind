/**
 * @param {string} s
 * @returns {boolean}
 */

function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
  console.log(s)
  let [l, r] = [0, s.length - 1]

  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }

  return true
}

const v = "A man, a plan, a canal: Panama"

console.log(isPalindrome(v))
