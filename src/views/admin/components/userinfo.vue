<template>
    <div v-if="data" class="an-userinfo">
        <div class="h-panel h-panel-no-border">
            <div class="h-panel-bar">
                <span class="h-panel-title primary-color">用户信息</span>
            </div>
            <div class="h-panel-body">
                <Form labelPosition="left" :labelWidth="80" >
                    <FormItem label="用户名字" readonly>
                        <p>{{req.name}}</p>
                    </FormItem>
                    <FormItem label="用户类型">
                        <Radio v-model="req.kind" :datas="kindDict" :disabled="isloading"></Radio>
                    </FormItem>
                    <FormItem label="用户状态">
                        <Radio v-model="req.status" :datas="statusDict" :disabled="isloading"></Radio>
                    </FormItem>
                    <FormItem label="用户密码">
                        <input style="width: 100%" :disabled="isloading"  type="text" v-model="req.password" />
                    </FormItem>
                </Form>
                <Button @click="save" :disabled="isloading"  transparent text-color="primary">修改</Button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userinfo",
        props:{
            data:{
                type: Object,
                default: null
            }
        },
        data(){
            return {
                kindDict:{1:"普通",2:"好友"},
                statusDict:{1:"正常",2:"黑名单",3:"已删除"},
                req:{
                    id:0,
                    name:"",
                    kind:0,
                    status:0,
                    password:""
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.init()
            })

        },
        methods: {
            init() {
                this.req = this.data
            },
            save() {
                this.L(() => {
                    this.$Message.success("修改成功！")
                }, "admin.user.edit")
            }
        }
    }
</script>

<style scoped>

</style>
