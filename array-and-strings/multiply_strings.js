/*
Question:
Multiply Strings
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

Helper Notes:
*/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = Array(num1.length + num2.length).fill(0);

    for(let j = num2.length - 1; j >= 0; j--){
        for(let i = num1.length - 1; i >= 0; i--){
            const product = num1[i] * num2[j];
            const index = (num1.length + num2.length -1) - (num1.length - 1 - i + num2.length - 1 - j);
            result[index] += product;

            if(result[index] > 9){
                result[index - 1] += Math.floor(result[index] / 10);
                result[index] %= 10;
            }
        }
    }

    while(result[0] === 0){
        result.shift();
    }

    return (result.length === 0) ? '0' : result.join('');
};


console.log(multiply("123456789","987654321"));
