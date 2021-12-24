//链表中倒数第k个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let h = head;
    let tail = head;
    for(let i = 0; i < k; i ++){    //需要注意边界
        if(tail == null)    return null;
        tail = tail.next;
    }
    while(tail != null){
        h = h.next;
        tail = tail.next;
    }
    return h;
};