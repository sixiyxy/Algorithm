function loadImg(url) { 
    return new Promise((resolve, reject) => { 
        const img = new Image(); 
        img.onload = function() { 
            resolve(img); 
        }; 
        img.onerror = function() { 
            reject(); 
        }; 
        img.src = url; 
    })
}

//1
loadImg(url1).then(() => {
    return loadImg(url2)
}).then(() => {
    return loadImg(url3)
})

//2
function loadAll(arr) {
    let result = []
    arr.forEach(item => {
        let p = loadImg(item).then((img) => {
                console.log(img)
            })
        console.log(p)
        result.push(p)
    });
    Promise.all(result).then(() => {
        console.log("done")
    }).catch((err) => {
        console.log(err)
    });
}
loadAll(urls)

//3
const loadImgArr = async (arr) => {
    for(let i = 0; i < arr.length; i++){
        const img = await loadImg(arr[i]);
    }
}

