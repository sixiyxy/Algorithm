var numDecoding = function(s) {
    const n = s.length;
    const f = new Array(n+1).fill(0);
    f[0] = 1;                     
    for(let i = 1; i <= n; i ++){   //i此处对应s中的要减去1
        if(s[i-1] !== '0'){
            f[i] += f[i-1];
        }
        if(i > 1 && s[i-2] !== '0' && ((s[i-2] - '0')*10 + (s[i-1] - '0') <= 26)){
            f[i] += f[i-2];
        }
    }
    return f[n];
}

var numDecodings = function(s) {
    const n = s.length;
    // a = f[i-2], b = f[i-1], c = f[i]
    let a = 0, b = 1, c = 0;
    for (let i = 1; i <= n; ++i) {
        c = 0;
        if (s[i - 1] !== '0') {
            c += b;
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            c += a;
        }
        a = b;
        b = c;
    }
    return c;
};

