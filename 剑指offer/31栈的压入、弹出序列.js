//栈的压入弹出队列
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let total = pushed.length
    for(let i = 0,index = 0; i < total; i ++){
        stack.push(pushed[i]);
        //注意此处的非空判断，否则两个栈会对null与null进行判断
        while(stack.length !== 0 && stack[stack.length - 1] === popped[index]){  
            stack.pop();
            index ++;
        }
    }
    return !stack.length
}