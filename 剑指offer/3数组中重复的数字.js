//数组中重复的数字
/**
 * @param {number[]} nums
 * @return {number}
 */

//空间换时间
var findRepeatNumber = function(nums) {
    let flag = new Array(nums.length).fill(0);
    for(num of nums){
        flag[num] ++;
        if(flag[num] > 1) {
            return num;
        }
    }
    return null;
};

//原地置换
var findRepeatNumber = function(nums) {
    for(let i = 0; i < nums.length; i ++){
        while(nums[i] != i){
            let temp = nums[i];
            if(nums[i] == nums[temp]) return temp;
            [nums[i],nums[temp]] = [nums[temp],nums[i]];
        }
    }
    return null;
};