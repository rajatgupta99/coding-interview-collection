/*
Question:
Integer to English Words
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:
Input: 123
Output: "One Hundred Twenty Three"

Example 2:
Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Example 4:
Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One" 

Helper Notes:
*/
//213,131,311
//TWO HUNDERED THIRTEEN MILLION, ONE HUNDRED THIRTY ONE THOUSAND, THREE HUNDERED ELEVEN
/**
 * @param {number} num
 * @return {string}
 */

const BELOW_TEN = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const BELOW_TWENTY = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const BELOW_HUNDRED = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

const helper = (num) => {
    let output = '';

    if(num < 10) output = BELOW_TEN[num];
    else if(num < 20) output = BELOW_TWENTY[num - 10];
    else if(num < 100) output = BELOW_HUNDRED[Math.floor(num / 10)] + ' ' + helper(num % 10);
    else if(num < 1000) output = BELOW_TEN[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    else if(num < 10000) output = BELOW_TEN[Math.floor(num / 1000)] + ' Thousand ' + helper(num % 1000);
    else if(num < 1000000) output = helper(Math.floor(num / 1000)) + ' Thousand ' +  helper(num % 1000);
    else if(num < 1000000000) output = helper(Math.floor(num / 1000000)) + ' Million ' + helper(num % 1000000);
    else if(num < 1000000000000) output = helper(Math.floor(num / 1000000000)) + ' Billion ' + helper(num % 1000000000);

    return output.trim();
};

const numberToWords = (num) => {
    if(num === 0) return 'Zero';
    return helper(num);
};


console.log(numberToWords(213131311));
