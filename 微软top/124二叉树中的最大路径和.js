/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;    //min_value是最接近0的正值

    var maxGain = function(node) {
        if(node === null){
            return 0;     //为null无贡献
        }
        let left = Math.max(maxGain(node.left), 0);   //＜0也无贡献，不计
        let right = Math.max(maxGain(node.right), 0);

        let priceNewPath = node.val + left + right;  //查找是否有新路径
        max = Math.max(max, priceNewPath);           //更新max
        return node.val + Math.max(left, right);     //向上一层返回该节点的最大贡献值
    }

    maxGain(root);
    return max;
};