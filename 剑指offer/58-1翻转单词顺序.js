/**
 * @param {string} s
 * @return {string}
 */

//使用split join
var reverseWords = function(s) {
    const arr = s.split(' ');
    let res = [];
    for(let i = arr.length - 1; i >= 0; i --){
        arr[i] && res.push(arr[i])
    }
    return res.join(' ');
}

//正则表达式
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ')

};

//
var reverseWords = function(s) {
    s = s.trim();
    let j = s.length - 1;
    let i = j;
    let res = "";
    while(i >= 0){
        while(i >= 0 && s[i] != ' ') i--;
        let temp = s.slice(i+1,j+1) + " ";
        //res.push(temp);
        res += temp;
        while(i >= 0 && s[i] == ' ') i--;
        j = i;
    }
    return res.trim();
};