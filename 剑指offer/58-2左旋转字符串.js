var reverseLeftWords = function(s, n) {
    let left = s.slice(0,n);
    let right = s.slice(n);
    return right + left;
};


//
var reverseLeftWords = function(s, n) {
    res = "";
    for(let i = n; i < n + s.length; i++){
        res += s[i%s.length];
    }
    return res;
};