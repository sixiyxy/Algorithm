var nthUglyNumber = function(n) {
    let a = 0, b = 0, c = 0;
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    for(let i = 1; i < n; i ++){
        let n2 = dp[a] * 2, n3 = dp[b] * 3; n5 = dp[c] * 5;
        dp[i] = Math.min(Math.min(n2,n3),n5);
        if(dp[i] == n2) a++;
        if(dp[i] == n3) b++;
        if(dp[i] == n5) c++;
    }
    return dp[n-1];
};