/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    const c = str.trim();
    if(c.length == 0) return 0;
    let res = 0, bndry = Math.floor(2147483647 / 10);
    let i = 1,sign = 1;
    if(c[0] == '-') sign = -1;
    else if(c[0] != '+') i = 0;
    for(let j = i; j < c.length; j++) {
        if(c[j] < '0' || c[j] > '9') break;
        if(res > bndry || res == bndry && c[j] > '7') return sign == 1 ? 2147483647 : -2147483648;
        res = res * 10 + (c[j] - '0');
    }
    return sign * res;

};