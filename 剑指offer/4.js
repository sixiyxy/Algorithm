//二维数组中的查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length) return false;    //易于遗漏
    const row = matrix.length, col = matrix[0].length;
    for(let i = 0, j = col - 1; i < row && j >= 0;){
        if(matrix[i][j] == target){
            return true;
        }else if(matrix[i][j] > target){
            j --;
        }else if(matrix[i][j] < target){
            i ++;
        }
    }
    return false;
};