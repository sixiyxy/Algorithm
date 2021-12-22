//找第k大的数  快排
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const len = nums.length;

    var quicksort = function(low, high){
        if(low > high) return;
        let pivotIndex = partition(nums, low, high);
        if ( pivotIndex > len - k ){
            quicksort(low, pivotIndex - 1)
        }else{
            quicksort(pivotIndex + 1, high);
        }
    }
    var partition = function(nums, low, high){
        let pivot = nums[low];
        while(low < high){
            while(low<high && nums[high] >= pivot){
                high --;
            }
            [nums[low],nums[high]] = [nums[high],nums[low]];
            while(low<high && nums[low] <= pivot){
                low ++;
            }
            [nums[low],nums[high]] = [nums[high],nums[low]];
        }
        return low;
    }

    quicksort(0, len-1);
    return nums[len-k];
};