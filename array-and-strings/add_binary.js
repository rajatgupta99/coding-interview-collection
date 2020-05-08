/*
Question:
Add Binary
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
Helper Notes:
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let output = Array(Math.max(a.length, b.length));
    let index = output.length - 1;
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while(i >= 0 || j >=0){
        let sum = carry;

        if(i >= 0){
            sum += a[i] - '0';
            i--;
        }

        if(j >= 0){
            sum += b[j] - '0';
            j--;
        }

        output[index] = sum % 2;
        carry = Math.floor(sum / 2);
        index--;
    }

    if(carry > 0){
        output.unshift(carry);
    }

    return output.join('');
};