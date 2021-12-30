var firstUniqChar = function(s) {
    const dic = new Map();
    for(let i = 0; i < s.length; i ++){
        if(dic.has(s[i])){
            dic.set(s[i], -1);
        }
        else{
            dic.set(s[i], i);
        }
    }
    let resIndex = s.length;
    for (let temp of dic.values()){
        if(temp != -1 && temp < resIndex){
            resIndex = temp;
        }
    }
    return resIndex === s.length ? " " : s[resIndex];
};