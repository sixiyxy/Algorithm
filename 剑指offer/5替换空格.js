//替换空格
/**
 * @param {string} s
 * @return {string}
 */

//库函数
var replaceSpace = function(s) {
    return s.replaceAll(" ","%20")
};

//从后往前   
var replaceSpace = function(s) {
    s = s.split("");
    let oldLength = s.length;
    let spaceCount = 0;
    for(let char of s){
        if(char == ' '){
            spaceCount ++;
        }
    }
    s.length += spaceCount * 2;
    // i == j时表示左边已无多余空格
    for(let i = oldLength - 1, j = s.length - 1; i != j;){
        if(s[i] != ' '){
            s[j] = s[i];
            i--;
            j--; 
        }else{
            s[j] = "0";
            s[j-1] = "2";
            s[j-2] = "%";
            j -= 3;
            i--;
        }
    }
    return s.join("");
};