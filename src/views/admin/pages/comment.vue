<template>
    <div class="an-comment">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">日志管理</span>
                    </div>
                    <div class="h-panel-bar">
                        <Row :space="9">
                            <Cell :width="4"><Select v-model="req.kind" :disabled="isloading" placeholder="评论类型" :datas="kindDict"></Select></Cell>
                            <Cell :width="4"><Select v-model="req.status" :disabled="isloading" placeholder="评论状态" :datas="statusDict"></Select></Cell>
                            <Cell :width="4"> <Button @click="load" :disabled="isloading" transparent text-color="primary">搜索</Button></Cell>
                        </Row>
                    </div>
                    <div class="h-panel-body">
                        <Table :datas="datas" :loading="isloading">
                            <TableItem title="ID" prop="id" align="left" :width="100"></TableItem>
                            <TableItem title="内容">
                                <template slot-scope="{data}">
                                    <Roast :data="data"></Roast>
                                </template>
                            </TableItem>

                            <TableItem title="类型" :width="100">
                                <template slot-scope="{data}">
                                    {{kindDict[data.kind]}}
                                </template>
                            </TableItem>
                            <TableItem title="状态">
                                <template slot-scope="{data}">
                                    <Radio v-model="data.status" :datas="statusDict" :disabled="isloading" @change="change(data)"></Radio>
                                </template>
                            </TableItem>

                            <div slot="empty">暂无数据</div>
                        </Table>
                        <br>
                        <Pagination v-model="req.page" @change="load" small></Pagination>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>

    import Time from '@/components/time'
    import Roast from '@/components/roast'

    import c from '@/config'
    import mock from '@/mock/random'

    export default {
        name: "comment",
        components: {
            Time,
            Roast
        },
        data(){
            return {
                kindDict:c.commentKindDict,
                statusDict: c.commentStatusDict,
                datas: [],
                req:{
                    page: {
                        pageNum: 1,
                        pageSize: 10,
                        total: 100
                    },
                    kind: 0,
                    status: 0
                }
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init(){
                this.load()
            },
            load(){
                this.L(() => {
                    let items = []
                    for(let i = 0; i < 10;i++){
                        let item = {
                            id:this.rd(10000,1),
                            userId:this.rd(100,1),
                            nickName: mock.user[this.rd(mock.user.length)].name || "匿名者",
                            avatar: `https://www.thiswaifudoesnotexist.net/example-${this.rd(100000,10000)}.jpg`,
                            articleId:this.rd(100,1),
                            status:this.rd(4,1),
                            kind:this.rd(2,1),
                            content:mock.bios[this.rd(mock.bios.length)] || "……",
                            parent:this.rd(10000,1),
                            like:this.rd(100),
                            atUserId: 0,
                            atNickName: "",
                            hasLike: this.rd(2),
                            createdAt:+new Date() - this.rd(10000000),
                            updatedAt:+new Date() - this.rd(10000000)
                        }
                        if(this.req.kind > 0){
                            item.kind = this.req.kind
                        }
                        if(this.req.status > 0){
                            item.status = this.req.status
                        }
                        if(item.kind == 2){
                            item.atUserId = this.rd(100,1)
                            item.atNickName = mock.user[this.rd(mock.user.length)].name || "匿名者"
                        }
                        items.push(item)
                    }
                    this.datas = items
                },"admin.comment")
            },
            change(v){
                this.L(() => {
                    console.log(v)
                    this.$Message.success("状态修改成功！")
                },"admin.comment.edit")
            }
        }
    }
</script>

<style scoped>

</style>
