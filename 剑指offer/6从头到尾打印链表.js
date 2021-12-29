//从尾到头打印链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

//递归
var reversePrint = function(head) {
    if(!head) return [];
    let p = head;
    let arr = reversePrint(p.next);
    arr.push(p.val);
    return arr;
};


//unshift
var reversePrint = function(head) {
    let ans = [];
    let temp = head;
    while(temp != null) {
        ans.unshift(temp.val);
        temp = temp.next;
    }
    return ans;
};