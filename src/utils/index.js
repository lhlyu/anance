
// 图片异步加载
function loadImageAsync(url){
    return new Promise( (resolve,reject) => {
        let img = new Image()
        img.src = url
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            resolve({src: null})
        }
    })
}


export default {
    loadImageAsync
}
