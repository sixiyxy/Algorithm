var lowestCommonAncestor = function(root, p, q) {
    if(root.val > p && root.val > q){
        return lowestCommonAncestor(root.left, p ,q);
    }
    if(root.val < p && root.val < q){
        return lowestCommonAncestor(root.right, p ,q);
    }
    return root;
};

var lowestCommonAncestor = function(root, p, q) {
    while(root != null){
        if(root.val < p.val && root.val < q.val)
            root = root.right;
        else if(root.val > p.val && root.val > q.val)
            root = root.left;
        else break;
    }
    return root;
};