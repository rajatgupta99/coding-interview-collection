/*
Question:
One Edit Distance
Given two strings s and t, determine if they are both one edit distance apart.

Note: 

There are 3 possiblities to satisify one edit distance apart:

Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t

Example 1:
Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.

Example 2:
Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.

Example 3:
Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.

Helper Notes:
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let ns = s.length;
    let nt = t.length;

    //s should be shorter than t
    if(ns > nt) return isOneEditDistance(t, s);

    //Difference of distance cannot be more than 1 since we are only looking for 1 edit distance
    if((nt - nt) > 1) return false;

    for(let i = 0; i < ns; i++){
        if(s[i] != t[i]){
            //If both string of same length
            if(ns === nt){
                return s[i + 1] === t[i + 1];
            }else{
                return s[i] === t[i +1];
            }
        }
    }
    
    return (ns + 1 === nt);
};
