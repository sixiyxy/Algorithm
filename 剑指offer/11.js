//旋转数组的最小数字

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    var low = 0,high = numbers.length-1;
    while(low < high){
        let middle = Math.floor((low + high)/2);
        if(numbers[high] < numbers[middle]){
            low = middle + 1;
        }
        else if(numbers[high] > numbers[middle]){
            high = middle;
        }
        else{
            high --;
        }
    }
    return numbers[low];
};