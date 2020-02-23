<template>
    <div class="an-profile">
        <Row :space="9">
            <Cell :width="12">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border">
                        <div class="h-panel-bar">
                            <Avatar :src="$user.avatar" shape="square">
                                <div class="primary-color"><Nameplate :data="$user"></Nameplate></div>
                                <p class="primary1-color" style="font-size: 12px">{{$user.bio}}</p>
                            </Avatar>
                        </div>
                        <div class="h-panel-body">
                            <p><strong>所在城市:</strong>{{$user.location}}</p>
                            <p><strong>最近访问:</strong><Time :time="$user.last"></Time></p>
                            <p><strong>用户状态:</strong>{{statusMap[$user.status]}}</p>
                            <ButtonGroup>
                                <Button class="an-glass" text-color="primary" :disabled="isloading" @click="synch">
                                    <span v-if="!isloading">同步{{$user.source}}资料</span>
                                    <span v-else>
                                    <i class="h-icon-loading"></i>
                                </span>
                                </Button>
                                <Button class="an-glass" text-color="primary" :disabled="isloading" @click="openModal = true">
                                    修改登陆密码
                                </Button>
                            </ButtonGroup>
                            <Modal v-model="openModal" :middle="true">
                                <div v-width="400">
                                    <div class="h-panel h-panel-no-border">
                                        <div class="h-panel-bar">
                                            <span class="h-panel-title primary-color">修改密码</span>
                                        </div>
                                        <div class="h-panel-body">
                                            <Form labelPosition="left" :labelWidth="80" >
                                                <FormItem label="原始密码">
                                                    <input v-model="req.alpha" type="text">
                                                </FormItem>
                                                <FormItem label="新的密码">
                                                    <input v-model="req.beta" type="text">
                                                </FormItem>
                                                <FormItem label="确认密码">
                                                    <input v-model="req.gamma" type="text">
                                                </FormItem>
                                                <Button @click="save" :disabled="isloading || !check"  transparent text-color="primary">修改</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>

    import Nameplate from '@/components/nameplate'
    import Time from '@/components/time'

    import c from '@/config'

    export default {
        name: "profile",
        components:{
            Nameplate,
            Time
        },
        data(){
            return {
                openModal: false,
                statusMap: c.userStatusDict,
                req:{
                    alpha:"",  // 原始密码
                    beta:"",   // 新密码
                    gamma:""   // 重复确认密码
                }
            }
        },
        methods:{
            synch(){
                this.L(() => {
                    this.$Message.success("同步成功！")
                },"admin.profile.synch")
            },
            save(){
                this.L(() => {
                    this.$Message.success("修改成功！")
                },"admin.profile.edit")
            }
        },
        computed:{
            check(){
                if(this.req.alpha.trim().length == 0 || this.req.beta.trim().length == 0 || this.req.gamma.trim().length == 0){
                    return false
                }
                if(this.req.beta.trim() != this.req.gamma.trim()){
                    return false
                }
                return true
            }
        }
    }
</script>

<style scoped>
    p{
        font-size: 12px;
    }
    strong{
        margin-right: 10px;
    }
</style>
