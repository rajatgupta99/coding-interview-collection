/*
Question:
Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Helper Notes:

*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let ans = 0;
    let map = new Map();

    for(let i = 0, j = 0; j < n; j++){
        if(map.has(s[j])){
            i = Math.max(map.get(s[j]) + 1, i);
        }

        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j);
    }
    return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
