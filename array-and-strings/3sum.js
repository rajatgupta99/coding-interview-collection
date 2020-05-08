/*
Question:
3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Helper Notes:
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //Sort Array
    //Check if i < 0 else break and return
    //Check if i - 1 and i and not the same, else skip

    //Check if sum < 0 increment low || if low == low -1 then increment low
    //Check if sum > 0 then decrement high || if high == high + 1 then decrement high
    //If sum == 0 then store the indexes in array
    let output = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;

        if(i === 0 || (nums[i] != nums[i-1])){
            let start = i + 1;
            let end = nums.length - 1;
            
            while(start < end){
                let sum = nums[i] + nums[start] + nums[end];
                if(sum < 0 || (start > i + 1) && (nums[start] === nums[start -1])){
                    start++;
                }else if(sum > 0 || ((end < nums.length - 1) && (nums[end] === nums[end+1]))){
                    end--;
                }else{
                    output.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                }
            }
        }
    }
    return output;
};

threeSum([-1, 0, 1, 2, -1, -4]);