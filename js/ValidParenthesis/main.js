/**
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
  const cm = {
    "[": { t: "open", v: "[" },
    "]": { t: "close", v: "[" },
    "(": { t: "open", v: "(" },
    ")": { t: "close", v: "(" },
    "{": { t: "open", v: "{" },
    "}": { t: "close", v: "{" },
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const tp = stack[stack.length - 1]

    if (cm[s[i]].t === "open") {
      stack.push(s[i])
      continue
    }

    if (!stack.length && cm[s[i]].t === "close") {
      return false
    }

    if (cm[s[i]].v !== cm[tp].v) {
      return false
    } else {
      stack.pop()
    }
  }

  if (stack.length) return false
  return true
}

// console.log(isValid("()[]{}"))
// console.log(isValid("((][}}"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("{[]}"))
function test(description, testFn) {
  try {
    testFn()
    console.log(`✅ ${description}`)
  } catch (error) {
    console.error(`❌ ${description}: ${error.message}`)
  }
}

test("isValid should return true for a valid input", () => {
  if (!isValid("()[]{}")) throw new Error("Failed for ()[]{}")
  if (!isValid("{[]}")) throw new Error("Failed for {[]}")
  if (!isValid("([{}])")) throw new Error("Failed for ([{}])")
  if (!isValid("()")) throw new Error("Failed for ()")
  if (!isValid("[]")) throw new Error("Failed for []")
  if (!isValid("{}")) throw new Error("Failed for {}")
})

test("isValid should return false for an invalid input", () => {
  if (isValid("(]")) throw new Error("Failed for (]")
  if (isValid("([)]")) throw new Error("Failed for ([)]")
  if (isValid("((][}}")) throw new Error("Failed for ((][}}")
  if (isValid("([)]")) throw new Error("Failed for ([)]")
  if (isValid("{{}")) throw new Error("Failed for {{}")
  if (isValid("([{}])}")) throw new Error("Failed for ([{}])}")
})

test("isValid should return true for an empty input", () => {
  if (!isValid("")) throw new Error("Failed for empty string")
})

test("isValid should return false for an input with only opening brackets", () => {
  if (isValid("(")) throw new Error("Failed for (")
  if (isValid("[")) throw new Error("Failed for [")
  if (isValid("{")) throw new Error("Failed for {")
})

test("isValid should return false for an input with only closing brackets", () => {
  if (isValid(")")) throw new Error("Failed for )")
  if (isValid("]")) throw new Error("Failed for ]")
  if (isValid("}")) throw new Error("Failed for }")
})

test("isValid should return false for an input with mismatched brackets", () => {
  if (isValid("([)]")) throw new Error("Failed for ([)]")
  if (isValid("{[}]")) throw new Error("Failed for {[}]")
  if (isValid("({[)]}")) throw new Error("Failed for ({[)]}")
})

test("isValid should handle nested brackets correctly", () => {
  if (!isValid("{{()}}")) throw new Error("Failed for {{()}}")
  if (!isValid("{[()]}")) throw new Error("Failed for {[()]}")
  if (!isValid("[{()}]")) throw new Error("Failed for [{()}]")
  if (!isValid("{{[[(())]]}}")) throw new Error("Failed for {{[[(())]]}}")
})
