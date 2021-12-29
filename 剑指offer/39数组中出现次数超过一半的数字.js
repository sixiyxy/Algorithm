//数组中出现次数超过一半的数组
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1;
    let num = nums[0];
    for(let i = 1; i < nums.length; i ++){
        count = num == nums[i]? count + 1 : count - 1;
        if(count == 0){
            count = 1;
            num = nums[i];
        }
        if(count > nums.length/2) break;
    }
    return num;
};