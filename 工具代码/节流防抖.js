function debounce(fn, wait){
    var timer = null;
    return function(){
        var context = this,
            args = arguments;
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(context, args)
        },wait);
    };
}



function throttle(fn, delay){
    var preTime = Date.now();
    return function() {
        var context = this,
            args = arguments,
            nowTime = Date.now();
        if(nowTime - preTime >= delay){
            preTime = Date.now();
            return fn.apply(context, args);
        }
    };
}

