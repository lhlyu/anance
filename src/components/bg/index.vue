<template>
    <div class="an-bg">
        <img v-if="img" :src="img" alt="bg">
    </div>
</template>

<script>

    import utils from "@/utils"

    export default {
        props:{
            url: {                 // 背景图片，支持多张图
              type: String|Array,
              default: null
            },
            carousel: {            // false - 不轮播
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                img: null
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadImg()
            })
        },
        methods:{
            init(){
                let imgs = []
                let type = Object.prototype.toString.call(this.url)
                if(type == `[object String]`){
                    if(this.url.length == 0){
                        return
                    }
                    imgs.push(this.url)
                }else if(type == `[object Array]`){
                    for(let v of this.url){
                        if(Object.prototype.toString.call(v) == `[object String]`){}
                    }
                }else{
                    return
                }
            },
            // 加载单张图片
            lazyImage(){

            },
            // 轮播多张图片
            carouselImages(){

            },
            loadImg(){
                let carousels = []
                let type = Object.prototype.toString.call(this.url)
                if(type == `[object String]`){
                    if(this.url.length == 0){
                        return
                    }
                    carousels.push(this.url)
                }else{
                    return
                }
                if(carousels.length == 0){
                    return
                }
                let that = this
                let length = carousels.length
                for(let i = 0;i < length;i++){
                    utils.loadImageAsync(carousels[i]).then(data => {
                        that.img = data.src
                    }).catch(data => {
                        return
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .an-bg{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        &:after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(#000000,0.3);
        }
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            animation: fadeInOut 2s linear;
        }
    }
    @keyframes fadeInOut {
        0% {
            opacity:0;
        }
        25% {
            opacity:0;
        }
        50% {
            opacity: 0.3;
        }
        75% {
            opacity:1;
        }
    }
</style>
