//对称的二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root)   //root root处理
};

const check = (leftPtr, rightPtr) => {
    // 如果只有根节点，返回true
    if (!leftPtr && !rightPtr) return true
    // 如果左右节点只存在一个，则返回false
    if (!leftPtr || !rightPtr) return false
    
    return leftPtr.val === rightPtr.val && check(leftPtr.left, rightPtr.right) && check(leftPtr.right, rightPtr.left)
}



//增加判断
var isSymmetric = function(root) {
    if(!root) return true;
    return compare(root.left,root.right);
};

var compare = function(left,right){
    if((!left) && right) return false;
    else if ((!right) && left) return false;
    else if((!left) && (!right)) return true;
    else if(left.val != right.val) return false;

    return compare(left.left,right.right) && compare(left.right,right.left);


}
