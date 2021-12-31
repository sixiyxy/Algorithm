/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//层序遍历
var maxDepth = function(root) {
    if(root == null) return 0;
    let queue = [root];
    let temp = [];
    let res = 0;
    while(queue.length){
        for(item of queue){
            item.left && temp.push(item.left);
            item.right && temp.push(item.right);
        }
        queue = temp;
        temp = [];
        res ++;
    }
    return res;
};

//dfs
var maxDepth = function(root) {
    let max = 0;
    var dfs = function(root, k){
        if(!root) return;
        root.left && dfs(root.left, k+1);
        max = Math.max(max, k);
        root.right && dfs(root.right, k+1);
    }
    dfs(root, 1);
    return max;
};

//递归
var maxDepth = function(root) {
    if(root == null) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
