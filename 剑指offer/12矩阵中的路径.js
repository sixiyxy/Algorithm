//矩阵中的路径
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var dfs = function(board, word, i, j, k) {
        if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] != word[k]) return false;
        if(k == word.length - 1) return true;    //此时已经有board[i][j] == word[k]
        let temp = board[i][j];
        board[i][j] = '-';                       //dfs常见操作
        let res = dfs(board,word,i+1,j,k+1) || dfs(board,word,i-1,j,k+1)||
                    dfs(board,word,i,j+1,k+1) || dfs(board,word,i,j-1,k+1)
        board[i][j] = temp;
        return res;
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] == word[0]){
                if(dfs(board,word,i+1,j,1)||dfs(board,word,i-1,j,1)
                    ||dfs(board,word,i,j+1,1)||dfs(board,word,i,j-1,1))
                    return true;
            }
        }
    }
    return false;
};

