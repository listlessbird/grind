"""
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
"""

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        k = {}
        m = {}
        
        for char in s:
            if char in k:
                k[char] += 1
            else:
                k[char] = 1
        
        
        for char in t:
            if char in m:
                m[char] += 1
            else:
                m[char] = 1
                
        return k == m