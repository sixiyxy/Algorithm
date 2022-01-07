/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i-1] + nums[i],nums[i]);
        max = Math.max(max,nums[i]);
    }
    return max;
};