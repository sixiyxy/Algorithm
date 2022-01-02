/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let res = 0;
for (let i = 0; i < 32; i++) {
    let cnt = 0;
    let bit = 1 << i;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] & bit) cnt++;
    }
    if (cnt % 3 != 0) res = res | bit;
}
return res;
};

