var MaxQueue = function() {
    this.queue = [];
    this.doubleQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.doubleQueue.length){
        return this.doubleQueue[0];
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    while(this.doubleQueue.length && this.doubleQueue[this.doubleQueue.length - 1] < value)
        this.doubleQueue.pop();
    this.doubleQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue.length) return -1;
    let value = this.queue.shift();
    if(value == this.doubleQueue[0]){
        this.doubleQueue.shift();
    }
    return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */