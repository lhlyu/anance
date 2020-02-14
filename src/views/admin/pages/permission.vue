<template>
    <div class="an-permission">
        <Row :space="9">
            <Cell :width="12">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">权限管理</span>
                    </div>
                    <div class="h-panel-body">
                        <div>
                            <Select :disabled="isloading" v-model="data.role" :datas="$roles" placeholder="选择角色" @change="selectHandler"></Select>
                            <br>
                        </div>
                        <Transfer v-model="data.permissions" :datas="sourceDatas" keyName="code" :option="option" style="width: 100%"></Transfer>
                        <br>
                        <Button transparent text-color="primary" :disabled="isloading" @click="save">确认</Button>
                    </div>
                </div>
            </Cell>
            <Cell :width="12">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">修改用户角色</span>
                    </div>
                    <div class="h-panel-body">
                        <div>
                            <AutoComplete type="title" placeholder="选择用户" :must-match="false"></AutoComplete>
                            <br>
                            <Select :disabled="isloading" v-model="data.role" :datas="$roles" placeholder="选择角色" @change="selectHandler"></Select>
                            <br>
                            <Button transparent text-color="primary" :disabled="isloading" @click="save">确认</Button>
                        </div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "permission",
        data(){
            return {
                option: {
                    ltHeadText: '未拥有的权限',
                    rtHeadText: '已拥有的权限',
                    filterable: true,
                    placeholder: '输入权限搜索',
                    render: function (op) {
                        return `${op.text}`;
                    }
                },
                isloading: false,
                def: ["website.visit","website.comment","website.comment.add"],
                data:{
                    permissions: ["website.visit","website.comment","website.comment.add"],
                    role: null,
                },
                sourceDatas: [
                    {code:"website.visit",text:"网站访问"},
                    {code:"website.comment",text:"文章评论(查看)"},
                    {code:"website.comment.add",text:"文章评论(创建)"},
                    {code:"website.admin",text:"管理后台"},

                    {code:"admin.board",text:"仪表板(查看)"},
                    {code:"admin.profile",text:"个人中心(查看)"},
                    {code:"admin.profile.edit",text:"个人中心(修改)"},
                    {code:"admin.permission",text:"权限管理(查看)"},
                    {code:"admin.permission.edit",text:"权限管理(修改)"},
                    {code:"admin.users",text:"用户中心(查看)"},
                    {code:"admin.users.edit",text:"用户中心(修改)"},
                    {code:"admin.users.del",text:"用户中心(删除)"},
                    {code:"admin.articles",text:"文章列表(查看)"},
                    {code:"admin.articles.edit",text:"文章列表(修改)"},
                    {code:"admin.articles.del",text:"文章列表(删除)"},
                    {code:"admin.articles.add",text:"文章列表(创建)"},

                    {code:"admin.tag",text:"标签管理(查看)"},
                    {code:"admin.tag.edit",text:"标签管理(修改)"},
                    {code:"admin.tag.del",text:"标签管理(删除)"},
                    {code:"admin.tag.add",text:"标签管理(创建)"},

                    {code:"admin.category",text:"分类管理(查看)"},
                    {code:"admin.category.edit",text:"分类管理(修改)"},
                    {code:"admin.category.del",text:"分类管理(删除)"},
                    {code:"admin.category.add",text:"分类管理(创建)"},

                    {code:"admin.comment",text:"评论管理(查看)"},
                    {code:"admin.comment.edit",text:"评论管理(修改)"},
                    {code:"admin.comment.del",text:"评论管理(删除)"},

                    {code:"admin.stat",text:"统计数据(查看)"},
                    {code:"admin.log",text:"操作日志(查看)"},
                ]
            }
        },
        methods:{
            selectHandler(value){
                let role = this.$roles.indexOf(value.key)
                if(role == -1){
                    return
                }
            },
            save(){
                this.isloading = true
                setTimeout(()=>{
                    this.$Message.success("提交成功！")
                    this.isloading = false
                },1000)
            }
        }
    }
</script>

<style scoped>

</style>
