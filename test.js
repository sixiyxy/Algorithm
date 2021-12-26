var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let total = pushed.length;
    for(let i = 0, index = 0; i < total; i++){
        stack.push(pushed[i]);
        while(stack[stack.length - 1] == popped[index]){
            stack.pop();
            index ++;
        }
    }
    return !stack.length
};

pushed = [1,2,3,4,5]
popped = [4,5,3,2,1]

let a = validateStackSequences(pushed, popped)