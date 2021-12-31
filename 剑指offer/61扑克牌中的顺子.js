var isStraight = function(nums) {
    const dic = new Set();
    let max = 0;
    let min = 15;
    for(num of nums){
        if(num != 0){
            if(dic.has(num)){
                return false;
            }
            else{
                dic.add(num);
            }
            min = min < num? min: num;
        }
        max = max > num? max: num;
    }
    return max-min<5;
};

var isStraight = function(nums) {
    let joker = 0;
    let lastnum = 0;
    nums.sort((a,b)=> a-b);  //记住该用法 sort((a,b) => a-b)
    for(num of nums){
        if(num == 0){
            joker ++;
        }
        else if(num == lastnum){
            return false;
        }
        else if(num != lastnum){
            lastnum = num;
        }       
    }
    return nums[4] - nums[joker] < 5;   //注意此处joker的用法 很巧妙
};