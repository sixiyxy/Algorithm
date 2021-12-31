/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//注意此处为排序数组  此处在寻找右边界
const binarySearch = function(target, nums){
    let low = 0, high = nums.length - 1;
    while(low <= high){
        let middle = Math.floor((low + high)/2);
        if(nums[middle] <= target) low = middle + 1;
        else high = middle - 1;
    }
    return low;
}

var search = function(nums, target) {
    return binarySearch(target, nums) - binarySearch(target-1, nums);
};

