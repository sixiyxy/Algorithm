//二叉搜索树的后序遍历序列
/**
 * @param {number[]} postorder
 * @return {boolean}
 */

//递归分治       
var verifyPostorder = function(postorder) {
    return check(postorder, 0, postorder.length - 1);
};

var check = function(postorder,i,j){
    if(i >= j) return true;
    let point = i;
    while(postorder[point] < postorder[j]) point++;
    let middle = point;
    while(postorder[point] > postorder[j]) point++;
    return (point == j) && check(postorder, i, middle-1) && check(postorder, middle, j-1);
}

//单调栈    倒序遍历，遇到递增的入栈，遇到递减的寻找其root节点，并且其右元素应该小于root
var verifyPostorder = function(postorder) {
    let stack = [];
    let root = Math.MAX_VALUE;
    for(let i = postorder.length - 1; i >= 0; i--){
        if(postorder[i] > root) return false;
        while(stack.length && stack[stack.length-1] > postorder[i])
            root = stack.pop();
        stack.push(postorder[i]);
    }
    return true;
};