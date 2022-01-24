function myinstanceof(left, right){
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while(proto){
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}