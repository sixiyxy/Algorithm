/**
 * @param {number} target
 * @return {number[][]}
 */
//滑动窗口
var findContinuousSequence = function(target) {
    let i = 1, j = 2, s = 3;
    const res = [];
    while(i < j){
        if(s === target){
            let ans = [];
            for(let k = i; k <= j; k++){
                ans.push(k);
            }
            res.push(ans);
        }
        if(s >= target){
            s -= i;
            i++;
        }else{
            j++;
            s += j;
        }
    }
    return res;
};

//求和公式