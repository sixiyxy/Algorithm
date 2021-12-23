//二进制中1的个数  n&(n-1)表示将n最右侧1变为0
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};

//使用 n&1 n = n >>> 1