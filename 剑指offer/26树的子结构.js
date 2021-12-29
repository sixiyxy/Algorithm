//树的子结构
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if( !A || !B ) return false;
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

var isSameTree = function(A, B) {
    if(!B){
        return true;
    }
    if(!A){    //此处存在前提 b不空
        return false;
    }
    if(A.val === B.val){
        return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
    }
}