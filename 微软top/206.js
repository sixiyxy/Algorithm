//反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur, pre, newhead;
    pre = null;
    cur = head;
    while(cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    return pre;
};