/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
//约瑟夫环    
//f(n, m) = (m % n + x) % n = (m + x) % n   f(n - 1, m) = x
var lastRemaining = function(n, m) {
    let x = 0;                  //f(1) = 0
    for (let i = 2; i <= n; i++) {
        x = (x + m) % i;
    }
    return x;
};