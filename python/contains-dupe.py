"""
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

"""

from typing import Set


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        set = Set()
        for num in nums:
            if num in set:
                return True
            set.add(num)
        return False
        