<template>
    <div class="an-nofound">
        <div class="an-container">
            <img width="150" height="150" v-if="$author.avatar && $author.avatar.length > 0" class="an-nofound-avatar" :src="$author.avatar" alt="$author.nickName">
            <router-link to="/" class="primary-color"><h1>404</h1></router-link>
            <hr class="an-nofound-divider">
            <p  class="primary-color">对不起，您要找的页面被弄丢失了，(＞人＜；)</p>
            <hr class="an-nofound-divider" style="width: 30%">
        </div>
    </div>
</template>

<script>
    export default {
        name: "nofound"
    }
</script>

<style scoped lang="scss">
    .an-nofound {
        .an-container{
            width: 800px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            text-align: center;
            .an-nofound-divider{
                border: none;
                margin: 20px auto;
                width: 50%;
                border-top: 1px solid rgba(#ca4f9f, 0.24);
            }
            h1{
                font-weight: 500;
                letter-spacing: 4px;
                font-size: 25px;
            }
            p{
                letter-spacing: 2px;
            }
            .an-nofound-avatar{
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #ffffff;
                box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
                transition: all 0.6s linear;
                &:hover{
                    transform: rotate(360deg);
                    border: 3px solid #ca4f9f;
                }
            }
        }
    }
</style>
