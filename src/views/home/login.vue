<template>
    <div class="an-login">
        <div class="an-login-card">
            <div class="h-panel">
                <div class="h-panel-bar">
                    <span class="h-panel-title primary-color">
                        Anance - 登陆
                    </span>
                    <span class="h-panel-right">
                        <a href="https://github.com/lhlyu/anance" target="_blank">
                            <i class="h-icon-github primary-color"></i>
                        </a>
                    </span>
                </div>
                <div class="h-panel-body">
                    <Row :space="9">
                        <Cell :width="24">
                            <div class="h-input h-input-prefix-icon" :style="style">
                                <input v-model="data.account" type="text" />
                                <i class="h-icon-user"></i>
                            </div>
                        </Cell>
                        <Cell :width="24">
                            <div class="h-input h-input-prefix-icon" :style="style">
                                <input v-model="data.password" type="password" />
                                <i class="h-icon-lock"></i>
                            </div>
                        </Cell>
                        <Cell :width="24">
                            <button class="h-btn primary-color" :style="style" @click="onLogin" @keydown.enter="onLogin">登陆</button>
                        </Cell>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        data(){
            return {
                style:{
                    minWidth:'100%'
                },
                data:{
                    account: "admin",
                    password: "123456"
                }
            }
        },
        methods:{
            onLogin(){
                if(this.data.account.length > 0 && this.data.password.length > 0){
                    if(this.$isMobile){
                        this.$Message.error("暂不支持手机登陆！")
                        return
                    }
                    this.$router.push("/admin")
                    return
                }
                this.$Message.error("账号或密码为空！")
            }
        }
    }
</script>

<style scoped lang="scss">
    .an-login{
        width: 100%;
        height: 100%;
        .an-login-card{
            position: absolute;
            top: 50%;
            right: 15%;
            width: 350px;
            transform: translate3d(0,-50%,0);
            .h-panel{
                box-shadow: 0 0 50px 10px rgba(#ffffff,0.5);
            }
        }
    }

    @media screen and (max-width: 600px) {
        .an-login{
            .an-login-card{
                right: 50%;
                transform: translate3d(50%, -50%, 0);
            }
        }
    }
</style>
