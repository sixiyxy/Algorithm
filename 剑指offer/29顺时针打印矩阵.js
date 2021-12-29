//顺时针打印矩阵
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//模拟路径
var spiralOrder = function(matrix) {
    if( !matrix.length || !matrix[0].length ) return [];
    const row = matrix.length, col = matrix[0].length;
    const total = row * col;
    const order = []
    let left = 0, right = col - 1, top = 0, bottom = row - 1;
    while(left <= right && top <= bottom){
        for(let column = left; column <= right;column ++){
            order.push(matrix[top][column]);
        }
        for(let i = top + 1; i <= bottom;i ++){
            order.push(matrix[i][right]);
        }
        if(left < right && top < bottom){
            for(let j = right - 1; j > left;j --){
                order.push(matrix[bottom][j]);
            }
            for(let i = bottom; i > top; i --){
                order.push(matrix[i][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
};

//按层
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length) return [];
    const row = matrix.length, col = matrix[0].length;
    const total = row * col;
    let i = 0,j = 0;
    const visit = new Array(row).fill(0).map(() => new Array(col).fill(false))
    const order = new Array(total).fill(0);
    const direction = [[0,1],[1,0],[0,-1],[-1,0]];
    let dirIndex = 0;
    for(let count = 0; count < total;count ++){
        order[count] = matrix[i][j];
        visit[i][j] = true;
        const nextrow = i +  direction[dirIndex][0],nextcol = j + direction[dirIndex][1]
        if(!(0 <= nextrow && nextrow < row && 0 <= nextcol && nextcol < col && !(visit[nextrow][nextcol]))){
            dirIndex = (dirIndex + 1) % 4;
        }
        i = i + direction[dirIndex][0];
        j = j + direction[dirIndex][1];
    }
    return order;
};