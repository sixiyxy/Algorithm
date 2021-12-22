//青蛙跳台阶（实质即为斐波那契问题）

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let n0 = 1,n1 = 1,sum;
    for(let i = 0;i < n;i ++){
        sum = (n0 + n1)%1000000007;
        n0 = n1;
        n1 = sum;
    }
    return n0;
};