/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const temp = new Array(nums.length);
    var mergeSort = function(left, right){
        if(left >= right) return 0;
        let middle = Math.floor((left + right) / 2);
        let res = mergeSort(left, middle) + mergeSort(middle + 1, right);
        let i = left, j = middle + 1;
        for(let k = left; k <= right; k ++){
            temp[k] = nums[k];
        }
        for(let k = left; k <= right; k ++){
            if(i == middle + 1){
                nums[k] = temp[j++];
            }
            else if (j == right + 1 || temp[i] <= temp[j]){
                nums[k] = temp[i++];
            }
            else{
                nums[k] = temp[j++];
                res += middle - i + 1;
            }
        }
        return res;
    }
    return mergeSort(0, nums.length - 1);
};