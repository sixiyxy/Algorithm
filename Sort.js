


var Bubblesort = function( nums ){
    let flag = true;
    for(let  i = 0; i < nums.length && flag; i ++){
        flag = false;
        for(let j = nums.length - 1; j > i; j--){
            if(nums[j] < nums[j-1]){
                [nums[j],nums[j-1]] = [nums[j-1],nums[j]];
                flag = true;
            }
        }
    }
    return nums;
}

var SelectSort = function( nums ){
    let minIndex;
    for(let i = 0; i < nums.length; i ++){
        minIndex = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[minIndex] > nums[j]){
                minIndex = j;
            }
        }
        if( minIndex != i){
            [nums[i],nums[minIndex]] = [nums[minIndex],nums[i]];
        }
    }
    return nums;
}

var insertSort = function( nums ){
    for(let i = 1; i < nums.length; i ++){
        if(nums[i] < nums[i-1]){
            let temp = nums[i];
            let j;
            for(j = i-1; nums[j] > temp; j--){
                nums[j+1] = nums[j];
            }
            nums[j+1] = temp;
        }
    }
    return nums;
}

var shellSort = function( nums ){
    let increment = nums.length - 1;
    while(increment > 1){
        increment = Math.floor(increment/3 + 1);
        for(let i = increment; i < nums.length ; i++){
            if(nums[i] < nums[i-increment]){
                let temp = nums[i], j;
                for(j = i-increment; j>=0 && temp<nums[j]; j-=increment){
                    nums[j+increment] = nums[j];
                }
                nums[j+increment] = temp;
            }
        }
    }
    return nums;
}


function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function quickSort(nums ,low, high){
    let pivot;
    if(low < high){
        pivot = Partition(nums, low, high);
        quickSort(nums, low, pivot-1);
        quickSort(nums, pivot+1, high);
    }
    return nums;
}
function Partition(nums, low, high){
    let pivot = nums[low];
    while(low < high){
        while(low<high && nums[high]>=pivot){
            high --;
        }
        [nums[low],nums[high]] = [nums[high],nums[low]];
        while(low<high && nums[low]<=pivot){
            low ++;
        }
        [nums[low],nums[high]] = [nums[high],nums[low]];
    }
    return low;
}

let nums = [7,6,5,4,3,2,1]
let a = quickSort(nums,0,nums.length-1)
console.log(a)