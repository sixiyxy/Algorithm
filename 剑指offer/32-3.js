//依次左右打印二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//左右放在一个循环中，使用push和unshift实现
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length){
        let temp = [];
        let n = queue.length;
        for(let i = 0; i < n; i ++){
            let node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(temp);
        n = queue.length;
        temp = [];
        if(!n) break;
        for(let i = 0; i < n; i ++){
            let node = queue.shift();
            temp.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
};

//使用 reverse函数
//判断 在之前的循环中添加双数判断 使用push和unshift函数