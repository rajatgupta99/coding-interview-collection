/*
Question:
Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false


Helper Notes:
This is a two pointer problem. 
Start one pointer from the beginning and one from the end of the string
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === '') return true;
    
    let start = 0;
    let end = s.length - 1;
    let regex = /^[0-9a-zA-Z]$/;
    
    while(start < end){
        if(!regex.test(s[start])){
            start++;
        }else if(!regex.test(s[end])){
            end--;
        }else{
            if(s[start].toLowerCase() === s[end].toLowerCase()){
                start++;
                end--;
            }else{
                return false;
            }
        }
    }
    return true;
};

let checkOne = "A man, a plan, a canal: Panama";
console.log(isPalindrome(checkOne));

let checkTwo = "race a car";
console.log(isPalindrome(checkTwo));