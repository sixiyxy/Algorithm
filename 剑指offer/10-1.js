//取模斐波那契数列

/**
 * @param {number} n
 * @return {number}
 */

//hash表
var map = new Map();
var fib = function(n) {
    if(n == 0) return 0;
    else if (n == 1)return 1;
    else{
        if(map.has(n)){
            return map.get(n);
        }
        else{
            let n1 = fib(n-2)%1000000007;
            map.set(n-2,n1);
            let n2 = fib(n-1)%1000000007;
            map.set(n-1,n2);
            let ans = (n1 + n2)%1000000007;
            map.set(n,ans)
            return ans;
        }
    }
};

//动态规划
var fib = function(n) {
    let n1 = 0, n2 = 1, sum;
    for(let i = 0; i < n; i ++){
        sum = (n1 + n2)%1000000007;
        n1 = n2;
        n2 = sum;
    }
    return n1;   //注意此处返回n1
};