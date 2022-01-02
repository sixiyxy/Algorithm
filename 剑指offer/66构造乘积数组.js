var constructArr = function(a) {
    const len = a.length;
    if(len == 0) return [];
    const b = new Array(len);
    b[0] = 1;
    let temp = 1;
    for(let i = 1; i < len; i++){
        b[i] = b[i-1] * a[i-1];
    }
    for(let i = len-2; i >= 0; i--){
        temp *= a[i+1];
        b[i] *= temp;
    }
    return b;
};