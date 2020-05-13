/*
Question:
Longest Substring with At Most K Distinct Characters

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

Helper Notes:
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let charArray = Array(256).fill(0);

    let distinct = 0;
    let output = 0;

    for(let i = 0, j = 0; j < s.length; j++){
        if(charArray[s.charCodeAt(j)]++ === 0){
            distinct++;
        }

        while(distinct > k && i < s.length){
            charArray[s.charCodeAt(i)]--;
            if(charArray[s.charCodeAt(i)] === 0){
                distinct--;
            }
            i++;
        }
        output = Math.max(output, j - i + 1);
    }
    return output;
};
