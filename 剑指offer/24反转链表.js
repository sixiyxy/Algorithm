//反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null)    return head;
    let h = head,tail = head.next;
    if(tail == null)    return head;
    
    h.next = null;
    while(tail){
        let temp = tail.next;
        tail.next = h;
        h = tail;
        tail = temp;
    }
    return h;
};

//优化
var reverseList = function(head) {
    let cur = head, pre = null;
    while(cur != null) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    return pre;
};


//递归
var reverseList = function(head) {
    return recur(head, null);
};
var recur = function(cur, pre) {
    if(cur == null) return pre;
    res = recur(cur.next, cur);
    cur.next = pre;
    return res;
}