//重建二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0) return null;
    let rootindex = preorder[0];
    const tree = new TreeNode(preorder[0]);
    let middleindex = inorder.indexOf(preorder[0]);
    tree.left = buildTree(preorder.slice(1,middleindex+1),inorder.slice(0,middleindex));
    tree.right = buildTree(preorder.slice(middleindex+1),inorder.slice(middleindex+1));
    return tree;
};