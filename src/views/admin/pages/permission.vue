<template>
    <div class="an-permission">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">权限管理</span>
                    </div>
                    <div class="h-panel-bar">
                        <Select v-model="role" :disabled="isloading" :datas="roleDict" placeholder="选择角色" @change="roleChangeHandler"></Select>
                        <br>
                        <div v-width="400">
                            <div class="h-input-group" v-width="500">
                                <input type="text" v-model="roleName" placeholder="当前角色" />
                                <ButtonGroup style="margin-left: 10px">
                                    <Button @click="addRole" :disabled="isloading || roleName.length == 0" transparent text-color="primary">添加</Button>
                                    <Button @click="editRole" :disabled="isloading || roleName.length == 0" transparent text-color="primary">修改</Button>
                                    <Button @click="delRole" :disabled="isloading || roleName.length == 0" transparent text-color="primary">删除</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div class="h-panel-body">
                        <h5>前台权限</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[0]">网站访问</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[1]">文章访问</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[2]">文章点赞</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[3]">文章评论</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[4]">评论点赞</Checkbox>
                        </p>
                        <br>
                        <h5>后台权限</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[5]">后台管理</Checkbox>
                        </p>
                        <h5>仪表板</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[6]">仪表板查看</Checkbox>
                        </p>
                        <h5>个人中心</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[7]">个人中心查看</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[8]">个人资料同步</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[9]">修改个人资料</Checkbox>
                        </p>
                        <h5>用户管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[10]">用户查询</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[11]">用户修改</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[12]">用户添加</Checkbox>
                        </p>
                        <h5>权限管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[13]">角色查询</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[14]">角色修改</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[15]">角色添加</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[16]">角色删除</Checkbox>
                        </p>
                        <h5>文章管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[17]">文章查询</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[18]">文章修改</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[19]">文章添加</Checkbox>
                        </p>
                        <h5>分类管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[20]">分类查询</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[21]">分类修改</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[22]">分类添加</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[23]">分类删除</Checkbox>
                        </p>
                        <h5>评论管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[24]">评论查询</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[25]">评论修改</Checkbox>
                        </p>
                        <h5>网站设置</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[26]">网站设置查看</Checkbox>
                            <Checkbox v-model="perms" :value="permValues[27]">网站设置修改</Checkbox>
                        </p>
                        <h5>日志管理</h5>
                        <p>
                            <Checkbox v-model="perms" :value="permValues[28]">日志查看</Checkbox>
                        </p>
                        <ButtonGroup>
                            <Button @click="save" :disabled="isloading || roleName.length == 0" transparent text-color="primary">修改</Button>
                            <Button @click="clear" :disabled="isloading || perms.length == 0" transparent text-color="primary">清空</Button>
                        </ButtonGroup>
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
                role: null,
                roleDict: {0:""},
                roleName:"",
                perms: [],
                permValues: ["visit","visit.article","visit.article.edit","visit.comment.add","visit.comment.edit",
                             "admin",
                             "admin.board",
                             "admin.profile","admin.profile.synch","admin.profile.edit",
                             "admin.user","admin.user.edit","admin.user.add",
                             "admin.permission","admin.permission.edit","admin.permission.add","admin.permission.del",
                             "admin.article","admin.article.edit","admin.article.add",
                             "admin.category","admin.category.edit","admin.category.add","admin.category.del",
                             "admin.comment","admin.comment.edit",
                             "admin.setting","admin.setting.edit",
                             "admin.record"
                ]
            }
        },
        mounted() {
            this.roleDict = this.$roles
        },
        methods:{
            save(){
                this.L(() => {
                    this.$Message.success("修改成功！")
                },"admin.permission.edit")
            },
            clear(){
                this.perms = []
            },
            roleChangeHandler(val){
                this.perms = []
                if(val){
                    this.roleName = val.title
                    let items = ["visit","visit.article"]
                    if(val.key > 0){
                        items.push("visit.comment.add")
                    }
                    if(val.key > 1){
                        items.push("admin","admin.board","admin.profile","admin.profile.synch")
                    }
                    if(val.key > 2){
                        items.push("admin.profile.edit")
                    }
                    if(val.key > 3){
                        items.push("admin.user")
                    }
                    if(val.key > 4){
                        items.push("admin.article")
                    }
                    if(val.key > 5){
                        items.push("admin.comment")
                    }
                    if(val.key > 6){
                        items.push("admin.setting")
                    }
                    if(val.key > 7){
                        items.push("admin.record")
                    }
                    if(val.key > 8){
                        items = this.permValues
                    }
                    this.perms = items
                }
            },
            // 检测参数
            check(){
                this.roleName = this.roleName.trim()
                if(this.roleName.length == 0){
                    this.$Message.warn("角色不能为空！")
                    return false
                }
                return true
            },
            // 添加角色
            addRole(){
                this.L(() => {
                    if(!this.check()){
                        return
                    }
                    if(Object.values(this.roleDict).includes(this.roleName)){
                        this.$Message.warn(`角色【${this.roleName}】已经存在！`)
                        return
                    }
                    let dict = this.Copy(this.roleDict)
                    let key = +new Date()
                    dict[key] = this.roleName
                    this.roleDict = dict
                    this.role = key
                    this.$Message.success(`角色【${this.roleName}】添加成功！`)
                },"admin.permission.add")
            },
            // 修改角色
            editRole(){
                this.L(() => {
                    if(!this.check()){
                        return
                    }
                    if(!Object.keys(this.roleDict).includes(this.role)){
                        this.$Message.warn(`请选择角色后再进行修改！`)
                        return
                    }
                    if(Object.values(this.roleDict).includes(this.roleName)){
                        this.$Message.warn(`角色【${this.roleName}】已经存在！`)
                        return
                    }
                    let currentRole =  this.roleDict[this.role]
                    let dict = this.Copy(this.roleDict)
                    dict[this.role] = this.roleName
                    this.roleDict = dict
                    this.$Message.success(`角色【${currentRole}】成功修改成【${this.roleName}】！`)
                },"admin.permission.edit")
            },
            // 删除角色
            delRole(){
                this.L(() => {
                    if(!this.check()){
                        return
                    }
                    if(!Object.values(this.roleDict).includes(this.roleName)){
                        this.$Message.warn(`角色【${this.roleName}】不存在！`)
                        return
                    }
                    let dict = this.Copy(this.roleDict)
                    delete dict[this.role]
                    this.$Message.success(`角色【${this.roleName}】删除成功！`)
                    this.roleName = ""
                    this.role = null
                    this.roleDict = dict
                },"admin.permission.del")
            }
        }
    }
</script>

<style scoped lang="scss">
    p{
        .h-checkbox{
            margin-right: 20px;
        }
    }
</style>
