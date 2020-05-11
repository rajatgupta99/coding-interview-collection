/*
Question:
Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

Helper Notes:
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //Find the first descending number from right to left = x
    //Then find the closest ascending number to x from right to left = y
    //Swap x and y
    //Reverse the number starting from x + 1 till the end of the array
    //If no descending number found then reverse the entire string
    let peak;
    //Find the peak
    for(let i = nums.length -1; i >= 0; i--){
        //No peak found
        if(i === 0) peak = 0;

        if(nums[i] > nums[i - 1]){
            peak = i;
            break;
        }
    }

    //Find the first largest number on the right
    for(let j = nums.length - 1; j >= 0; j--){
        if(nums[j] > nums[peak - 1]){
            let temp = nums[j];
            nums[j] = nums[peak - 1];
            nums[peak - 1] = temp;
            break;
        }
    }

    //Reverse the values
    let start = peak;
    let end = nums.length - 1;
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums;
};
