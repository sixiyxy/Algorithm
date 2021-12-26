//从上到下打印二叉树  实质层序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const queue = [root];
    while(queue.length){
        const temp = queue.shift();   //注意此处使用队列，而不是栈
        res.push(temp.val)
        temp.left && queue.push(temp.left);      //注意此处tips
        temp.right && queue.push(temp.right);
    }
    return res;
};