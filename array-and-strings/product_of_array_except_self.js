/*
Question:
Product of Array Except Self
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

Helper Notes:
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = Array(nums.length);
    output[0] = 1;
    let right = 1;
    
    for(let i = 1; i < output.length; i++){
        output[i] = nums[i-1] * output[i-1];
    }
    
    for(let i = output.length -1; i >= 0; i--){
        output[i] *= right;
        right *= nums[i];
    }
    return output;
};
