//包含min函数的栈
//都使用辅助栈，辅助栈中可以保存当前每个元素对应的最小值，同时pop 或者有更小值时才入栈，相等时才pop
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.minStack.push(Math.min(this.minStack[this.minStack.length-1],x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */