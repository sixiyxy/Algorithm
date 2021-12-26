//从上到下打印二叉树 分层
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length){
        let temp = [];
        for(let i = queue.length;i > 0; i--){   //注意 此处不能使用0-length 因为length在改变
            let n = queue.shift();
            temp.push(n.val);
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
        }
        res.push(temp);
    }
    return res;

};

//二元组直接记录层数信息
var levelOrder = function(root) {
    
    if (!root) return []

    const queue = [[root, 0]], res = []

    while (queue.length) {
        const [node, level] = queue.shift()

        // 判断当前层是否已经初始化设置 [] 若无则初始化一下
        if (!res[level]) res[level] = []
        res[level].push(node.val)

        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([ node.right, level + 1 ])
    }

    return res
};
