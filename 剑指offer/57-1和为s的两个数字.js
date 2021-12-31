/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//对每个元素，和数组最末数字开始匹配
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++){
        let j = nums.length - 1;
        while(j > i){
            if(nums[i] + nums[j] < target){
                break;
            }
            else if(nums[i] + nums[j] > target){
                j--;
            }
            else{
                return [nums[i],nums[j]];
            }
        }
    }
};

//双指针   最大的加最小的都比target大，所以最大的数舍弃；最小的加最大的都比target小，所以最小的舍弃
var twoSum = function(nums, target) {
    let i = 0,j = nums.length - 1;
    while( i < j ){
        let sum = nums[i] + nums[j];
        if(sum > target) j--;
        else if(sum < target) i++;
        else{
            return [nums[i],nums[j]];
        }
    }
};