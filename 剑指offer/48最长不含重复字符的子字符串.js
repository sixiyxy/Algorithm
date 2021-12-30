/**
 * @param {string} s
 * @return {number}
 */
//针对每个元素查看上一次出现位置
var lengthOfLongestSubstring = function(s) {
    const dic = new Map();
    let res = 0, temp = 0; 
    for(let i = 0; i < s.length; i++){
        let lastIndex = dic.get(s[i]);
        lastIndex = lastIndex === undefined ? -1 : lastIndex;
        dic.set(s[i],i);
        temp = temp < i - lastIndex ? temp + 1 : i - lastIndex;
        res = Math.max(res, temp);
    }
    return res;
};

//lastIndex保存上一次出现重复元素的位置即可
var lengthOfLongestSubstring = function(s) {
    const dic = new Map();
    let res = 0;
    let lastIndex = -1;
    for(let i = 0; i < s.length; i++){
        if(dic.has(s[i])){
            lastIndex = Math.max(lastIndex, dic.get(s[i]));
        }
        dic.set(s[i],i);
        res = Math.max(res, i - lastIndex);
    }
    return res;
};
