var maxSubArray = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length; i++){
        nums[i] += Math.max(nums[i - 1], 0);
        res = Math.max(res, nums[i]); 
    }
    return res;
};

//搞清楚dp[i]的意义  表示以i结尾的最大连续子数组之和，若dp[i-1]<0，则dp[i]即为nums[i]