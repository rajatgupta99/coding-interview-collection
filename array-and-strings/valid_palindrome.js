/*
This is a two pointer problem. 
Start one pointer from the beginning and one from the end of the string
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    let start = 0, end = s.length - 1;
    const regexExp = /^[0-9a-zA-Z]$/;

    while(start < end){
        if(!regexExp.test(s[start])){
            start += 1;
        }else if(!regexExp.test(s[end])){
            end -= 1;
        }else{
            if(s[start].toLowerCase() != s[end].toLowerCase()){
                return false
            }else{
                start += 1;
                end -= 1;
            }
        }
    }
    return true;
};

let checkOne = "A man, a plan, a canal: Panama";
console.log(isPalindrome(checkOne));

let checkTwo = "race a car";
console.log(isPalindrome(checkTwo));