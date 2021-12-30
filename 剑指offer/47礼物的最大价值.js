/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const row = grid.length,
        col = grid[0].length;
    for(let i = 1; i < row; i++){          //直接将原数组作为dp，先更新第一列和第一行数据
        grid[i][0] += grid[i-1][0]; 
    }
    for(let j = 1; j < col; j++){
        grid[0][j] += grid[0][j-1];
    }
    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            grid[i][j] += Math.max(grid[i][j-1],grid[i-1][j]);
        }
    }
    return grid[row-1][col-1]
};