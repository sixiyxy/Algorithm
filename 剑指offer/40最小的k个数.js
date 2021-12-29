//最小的k个数
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let left = 0, right = arr.length - 1;
    quicksort(arr, left, right);
    return arr.slice(0, k);
};

var quicksort = function(arr, low, high){
    let pivot;
    if(low < high){
        pivot = partition(arr, low, high);
        quicksort(arr, low, pivot-1);
        quicksort(arr, pivot+1, high);
    }
    return arr;
}

var partition = function(arr, low, high) {
    let pivot = arr[low];
    while(low < high){
        while(low < high && arr[high]>=pivot){
            high--;
        }
        [arr[low],arr[high]] = [arr[high],arr[low]];
        while(low < high && arr[low]<=pivot){
            low++;
        }
        [arr[low],arr[high]] = [arr[high],arr[low]];
    }
    return low;
}

