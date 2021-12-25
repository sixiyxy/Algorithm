//二叉树的镜像
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return null;
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    [root.left, root.right] = [right, left];
    return root;
};