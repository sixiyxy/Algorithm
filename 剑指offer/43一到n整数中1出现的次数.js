/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let digit = 1, res = 0;
    let high = Math.floor(n / 10), cur = n % 10, low = 0;
    while(high || cur){
        if(cur == 0) res += high * digit;
        else if(cur == 1) res += high * digit + low + 1;
        else res += (high + 1) * digit;
        low += cur * digit;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }
    return res;
};