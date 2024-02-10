/**
 * @param {string[]} strs
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
  const mp = {}

  for (let i = 0; i < strs.length; i++) {
    const k = [...strs[i]].sort().join("")
    if (!mp[k]) {
      mp[k] = []
      mp[k].push(strs[i])
      continue
    }

    mp[k].push(strs[i])
  }
  return Object.values(mp)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// console.log(groupAnagrams(["a"]))
// console.log(groupAnagrams(["", ""]))
// console.log(groupAnagrams(["", "b"]))

/* 
Two strings are anagrams of each other if we sort them and get same string for both
*/
