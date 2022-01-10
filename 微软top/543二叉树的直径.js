/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans;
    var depth = function(node){
        if(node == null){
            return 0;
        }                               //路径为节点数-1，计算最多节点
        let left = depth(node.left);
        let right = depth(node.right);
        ans = Math.max(ans, left+right+1);
        return Math.max(left, right) + 1;      //返回以该节点为终点的最长路径
    }

    ans = 1;
    depth(root);
    return ans-1;
};