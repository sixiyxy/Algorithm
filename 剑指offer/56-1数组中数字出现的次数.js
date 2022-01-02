var singleNumbers = function(nums) {
    let x = 0, y = 0, n = 0, m = 1;
    for(let i = 0; i < nums.length; i++){
        n ^= nums[i];
    }
    while((n & m) === 0){
        m <<= 1;
    }
    for(let i = 0; i < nums.length; i++){
        if((nums[i] & m) != 0) x ^= nums[i];
        else y ^= nums[i];
    }
    let res = [x, y];
    return res;
}