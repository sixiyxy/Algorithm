//调整数组顺序使奇数位于偶数前面
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let head = 0;
    let tail = nums.length-1;
    while(head < tail){
        while(nums[head]%2 == 1)head ++;
        while(nums[tail]%2 == 0)tail --;
        if(head < tail){
            [nums[head],nums[tail]] = [nums[tail],nums[head]];
        }
    }
    return nums;
};