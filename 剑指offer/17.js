//打印从1到最大的n位数  js中存在字符串与数字的比较 较为简单
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let res = [];
    let max = '';
    while (n--) {
        // will get the maxNumber of string type -> '9'/'99'/'999'/'9..9' -> this will avoid the bigInt issue
        max += '9';
    }

    for (let i = 1, l = max - '0'; i <= l; i++) res.push(i);
    return res;
};
