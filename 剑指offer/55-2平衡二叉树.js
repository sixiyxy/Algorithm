//计算最大深度，并使用层序遍历检查
var isBalanced = function(root) {
    if(!root) return true;
    const queue = [root];
    while(queue.length){
        let node = queue.shift();
        if(Math.abs(Maxlength(node.left) - Maxlength(node.right)) > 1) return false;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return true;
};

var Maxlength = function(root) {
    if(!root) return 0;
    return Math.max(Maxlength(root.left),Maxlength(root.right)) + 1;
}


//后序遍历 剪枝
var isBalanced = function(root) {
    return recur(root) != -1;
};

var recur = function(root) {
    if(!root) return 0;
    let left = recur(root.left);
    if(left == -1) return -1;
    let right = recur(root.right);
    if(right == -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
