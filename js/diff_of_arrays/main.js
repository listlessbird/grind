/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  const ans = Array.from({ length: 2 }, () => new Set())
  const ns1 = new Set(nums1)
  const ns2 = new Set(nums2)

  for (let i = 0; i < nums1.length; i++) {
    if (!ns2.has(nums1[i])) ans[0].add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!ns1.has(nums2[i])) ans[1].add(nums2[i])
  }

  return [Array.from(ans[0]), Array.from(ans[1])]
}
