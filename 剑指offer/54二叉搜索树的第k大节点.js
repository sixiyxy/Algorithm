/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//反转中序遍历   注意if(k == 0) return;
var kthLargest = function(root, k) {
    let res;
    var inorderDfs = function(root){
        if(!root) return;
        inorderDfs(root.right);
        if( k == 0) return;
        if(--k == 0) res = root.val;
        inorderDfs(root.left);
    }
    inorderDfs(root);
    return res;
};