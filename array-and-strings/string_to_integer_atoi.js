/*
Question:
String to Integer (atoi)
Given a string, find the length of the longest substring without repeating characters.

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:
Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:
Input: "42"
Output: 42

Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.

Helper Notes:

- Unicode for 0 -> 48
- Unicode for 1 -> 49 and so on for other numbers

*/

/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
    //Remove white spaces
    //if first non white space character is not a + - or number or empty string then return 0
    //then take + or - sign
    //then covert the numbers
    //if coverted value is outside man or min int range then return max or min int value
    let sign = 1;
    let output = 0;
    let i = 0;

    const INT_MAX = (Math.pow(2,31) - 1);
    const INT_MIN = Math.pow(-2,31);

    while(str[i] === ' ') i++;

    if(str[i] === '-' || str[i] === '+'){
        sign *= (str[i] === '-') ? -1 : 1;
        i++;
    }

    while(((str[i] - '0') >= 0) && ((str[i] - '0') <= 9) && str[i] != ' '){
        output = output * 10 + (str[i] - '0');
        i++;
    }

    output *= sign;

    if(output > INT_MAX){
        return INT_MAX;
    }else if(output < INT_MIN){
        return INT_MIN;
    }

    return output;
};

console.log(myAtoi('4193 with words'));

console.log(myAtoi('-4193 with words'));
