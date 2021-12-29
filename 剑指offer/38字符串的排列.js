//字符串的排列   不出现重复字符
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    
    if(!s.length) return [];
    if(s.length == 1) return [s];
    s = s.split("")
    const res = [];
    function dfs(x){
        if(x == s.length - 1){
            res.push(s.join(""));
            return;
        } 
        const dic = new Set();
        for(let i = x; i < s.length; i ++){
            if(!dic.has(s[i])){
                dic.add(s[i]);
                [s[i],s[x]] = [s[x],s[i]];
                dfs(x + 1);
                [s[i],s[x]] = [s[x],s[i]];
            } 
            
        }
    }
    
    dfs(0);
    return res;
    
};
