//数值的整数次方 快速幂
//二分法
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const isNegative = n < 0; // 是否是负指数
    const result = absMyPow(x, Math.abs(n));
    return isNegative ? 1 / result : result;
};

function absMyPow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent === 1) {
        return base;
    }

    const subResult = absMyPow(base, Math.floor(exponent / 2));
    return exponent % 2 ? subResult * subResult * base : subResult * subResult;
}

//二进制角度
var myPow = function(x, n) {
    if(x == 0)  return 0;
    if(n == 1)  return x;
    let flag = 0;
    if(n < 0){
        flag = 1;
        n = -n;
    }
    let result = 1;
    while(n){
        if( n & 1 ){
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    return flag? 1/result:result;
};