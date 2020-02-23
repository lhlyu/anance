<template>
    <div class="an-user">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">用户管理</span>
                    </div>
                    <div class="h-panel-bar">
                        <Row :space="9">
                            <Cell :width="4"><Select v-model="req.order" :disabled="isloading" placeholder="排序规则" :datas="orderDict"></Select></Cell>
                            <Cell :width="8"><input style="width: 100%" :disabled="isloading"  type="text" v-model="req.q" placeholder="@field:keyword" /></Cell>
                            <Cell :width="8"> <Button @click="load" :disabled="isloading" transparent text-color="primary">搜索</Button></Cell>
                        </Row>
                    </div>
                    <div class="h-panel-body">
                        <Table :datas="datas" :loading="isloading">
                            <TableItem title="ID" prop="id" align="center"></TableItem>
                            <TableItem title="名字" prop="name"></TableItem>
                            <TableItem title="昵称" prop="nickName"></TableItem>

                            <TableItem title="角色">
                                <template slot-scope="{data}">
                                    {{$roles[data.role]}}
                                </template>
                            </TableItem>
                            <TableItem title="最后访问">
                                <template slot-scope="{data}">
                                    <Time :time="data.last"></Time>
                                </template>
                            </TableItem>
                            <TableItem title="加入时间">
                                <template slot-scope="{data}">
                                    <Time :time="data.createdAt"></Time>
                                </template>
                            </TableItem>
                            <TableItem title="类型">
                                <template slot-scope="{data}">
                                    {{kindDict[data.kind]}}
                                </template>
                            </TableItem>
                            <TableItem title="状态">
                                <template slot-scope="{data}">
                                    {{statusDict[data.status]}}
                                </template>
                            </TableItem>
                            <TableItem title="操作" align="center">
                                <template slot-scope="{data}">
                                    <Button size="xs" text-color="primary" @click="open(data)">修改</Button>
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
    import Userinfo from '@/views/admin/components/userinfo'

    import c from '@/config'
    import mock from '@/mock/random'

    export default {
        name: "user",
        components:{
            Time,
            Userinfo
        },
        data(){
            return {
                opened: false,
                orderDict:{1:"降序",2:"升序"},
                kindDict:c.userKindDict,
                statusDict:c.userStatusDict,
                datas: [],
                req:{
                    page: {
                        pageNum: 1,
                        pageSize: 10,
                        total: 100
                    },
                    order: 1,
                    q: "",
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
            open(v) {
                this.$Modal({
                    middle: true,
                    component: {
                        vue: Userinfo,
                        datas: { data: v }
                    },
                    events: {
                        success: (modal, data) => {
                        }
                    }
                })
            },
            load(){
                this.L(() => {
                    let items = []
                    for(let i = 0;i < 10; i++){
                        let item = {
                            id:this.rd(10000,1),
                            name: mock.user[this.rd(mock.user.length)].name || "匿名者",
                            nickName:mock.user[this.rd(mock.user.length)].nickName || "匿名者",
                            bg:"",
                            avatar:`https://www.thiswaifudoesnotexist.net/example-${this.rd(100000,10000)}.jpg`,
                            bio:mock.bios[this.rd(mock.bios.length)] || "……",
                            url:"https://github.com/lhlyu/anance",
                            website:"https://github.com/lhlyu",
                            role:this.rd(10),
                            location:"Shenzhen,China",
                            last:+new Date() - this.rd(10000000),
                            source:mock.sources[this.rd(mock.sources.length)] || "本站",
                            kind:this.rd(2,1),
                            status:this.rd(3,1),
                            ip:`${this.rd(255)}.${this.rd(255)}.${this.rd(255)}.${this.rd(255)}`,
                            createdAt:+new Date() - this.rd(10000000),
                        }
                        items.push(item)
                        this.datas = items
                    }
                },"admin.user")
            }
        }

    }
</script>

<style scoped lang="scss">

</style>
