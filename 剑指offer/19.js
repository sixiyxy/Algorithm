//19正则表达式匹配
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m = s.length;
    let n = p.length;
    let dp = Array.from({length: m + 1}, x=>new Array(n+1).fill(false));
    dp[0][0] = true;
    for(let i = 0; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(p[j-1] === "*"){           //注意此处p和dp的index不匹配 j-1为p第j个元素 对应dp[][j]
                dp[i][j] = dp[i][j-2];    //若*取值为0
                if(match(s,p,i,j-1)) {
                    dp[i][j] = dp[i][j] || dp[i-1][j];
                } else {
                    if(match(s,p,i,j)) {
                        dp[i][j] = dp[i-1][j-1];
                    }
                }
            }
        }
    }
    return dp[m][n];
};

const match = (s,p,i,j)=> {
    if(i === 0) return false;
    if(p[j-1] === '.') return true;
    return s[i-1] === p[j-1];
}