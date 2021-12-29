//两个栈实现队列
var CQueue = function() {
    stack1 = [];
    stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(stack2.length == 0 && stack1.length == 0) return -1;
    if(stack2.length != 0)
        return stack2.pop();
    else{
        while(stack1.length != 0){
            let value = stack1.pop();
            stack2.push(value);
        }
        return stack2.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */