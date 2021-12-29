/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    var dfs = function(index) {
        if(index >= nums.length){     //计算的是多少种不同的计算方法
            return 1;             
        }
        let temp = Number(nums[index] + nums[index + 1])
        if(temp >= 10 && temp <= 25){
            return dfs(index + 1) + dfs( index + 2);
        }
        else{
            return dfs(index + 1);
        }
    }
    let nums = num.toString();
    let res = dfs(0);
    return res;
};

