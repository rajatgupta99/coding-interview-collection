/*
Question:
Minimum Window Substring
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

Helper Notes:
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
    if(s.length === 0 || t.length === 0) return '';

    let tCount = Array(128).fill(0);

    for(let i = 0; i < t.length; i++){
        ++tCount[t.charCodeAt(i)];
    }

    let output = '';
    let matchCount = 0;
    let minWindow = Number.MAX_SAFE_INTEGER;

    for(let i =0, j=0; j < s.length; j++){

        if(--tCount[s.charCodeAt(j)] >= 0){
            ++matchCount;
        }

        while(matchCount === t.length){
            if(minWindow > j - i + 1){
                minWindow = j - i + 1;
                output = s.substring(i, j + 1);
            }

            if(++tCount[s.charCodeAt(i)] > 0){
                --matchCount;
            }
            ++i;
        }
    }
    return output;
};