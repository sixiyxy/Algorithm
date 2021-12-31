var missingNumber = function(nums) {
    let low = 0, high = nums.length - 1;
    while(low <= high){
        let middle = Math.floor((low + high) / 2);
        if(nums[middle] > middle){
            high = middle - 1;
        }
        else if(nums[middle] == middle){
            low = middle + 1;
        }
    }
    return low;
};
//注意此处返回的是low 代表缺失的数字  实质也为二分法