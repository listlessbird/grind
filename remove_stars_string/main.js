/**
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
  const stack = []

  for (const letter of s) {
    if (letter !== "*") {
      stack.push(letter)
      continue
    }
    stack.pop()
  }
  return stack.join("")
}

console.log(removeStars("leet**cod*e"))
console.log(removeStars("erase*****"))
