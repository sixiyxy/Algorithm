//二叉树中和为某一值的路径
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const path = [];
    const res = [];

    var dfs = function(node, tar) {
        if(!root) return;
        path.push(node.val);
        tar -= node.val;
        if(!root.left && !root.right && tar === 0){
            res.push([...path]);           //注意此处的解构赋值
        }
        dfs(root.left, tar);
        dfs(root.right, tar);
        path.pop();     //注意此处的pop
    }

    dfs(root, target);
    return res;
};