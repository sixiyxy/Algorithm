//删除链表的节点
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let h = head;
    if(h == null) return null;
    if(h.val == val) return h.next;
    let tail = head.next;
    while(tail != null){
        if(tail.val == val){
            h.next = tail.next;
            return head;
        }
        h = tail;
        tail = tail.next;
    }
    return head;
};

//原地删除 将要删除项的后一项值传递给前一项