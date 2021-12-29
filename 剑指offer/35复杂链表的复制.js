//复杂链表的复制
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//在map中先新建节点，再遍历一次构建节点指向
var copyRandomList = function(head) {
    if(!head) return head;
    let node = head;
    let map = new Map();

    while(node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;

    while(node){
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
};

//构建 原节点 1 -> 新节点 1 -> 原节点 2 -> 新节点 2 -> …… 的拼接链表
var copyRandomList = function(head) {
    if(!head) return null;

    let node = head;
    while(node){
        const newnode = new Node(node.val,node.next)
        node.next = newnode;
        node = node.next.next;
    }

    node = head;
    while(node){
        node.next.random = node.random? node.random.next : null;
        node = node.next.next;
    }

    node = head;
    let res = node.next;
    let newhead = node.next;
    while(newhead.next ){
        node.next = newhead.next;
        newhead.next = newhead.next.next;
        node = node.next;
        newhead = newhead.next;
    }
    node.next = null;    //注意此处，若不能改变原链表
    return res;

};