
// 图片异步加载
function loadImageAsync(url){
    return new Promise((resolve,reject)=>{
        let image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            resolve({
                src: null
            });
        }
        image.src = url;
    })
}


export default {
    loadImageAsync
}