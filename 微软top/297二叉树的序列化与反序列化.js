/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    this,stack = [root];
    let res = [];
    while(stack.length){                   //广度优先遍历
        const node = stack.pop();
        if(node){
            res.push(node.val);
            stack.push(node.left);
            stack.push(node.right);
        }else{
            res.push("null");
        }
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data == 'null') return null;
    const list = data.split(',');             //存储节点的值
    const root = new TreeNode(list[0]);
    const queue = [root];              //存储节点
    let cursor = 1;                    //通过cursor选择list中的值
    while(cursor < list.length){
        const node = queue.shift();
        const leftval = list[cursor];
        const rightval = list[cursor+1];
        if(leftval != 'null'){
            const leftnode = new TreeNode(leftval);
            node.left = leftnode;
            queue.push(leftnode);
        }
        if(rightval != "null"){ 
            const rightnode = new TreeNode(rightval);
            node.right = rightnode;
            queue.push(rightnode);
        }
        cursor += 2;
    }    
    return root; 
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */