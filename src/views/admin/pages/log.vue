<template>
    <div class="an-log">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">日志管理</span>
                    </div>
                    <div class="h-panel-body">
                        <Row :space="9">
                            <Cell :width="4">
                                <Select :disabled="isloading" v-model="data.kind" :datas="kinds" placeholder="选择日志类型"></Select>
                            </Cell>
                            <Cell :width="4">
                                <Search v-model="data.keyword" style="width: 100%"></Search>
                            </Cell>
                        </Row>
                        <br>
                        <Table :datas="datas" :loading="isloading">
                            <TableItem title="ID" prop="id"></TableItem>
                            <TableItem title="用户ID" prop="userId"></TableItem>
                            <TableItem title="目标ID" prop="businessId"></TableItem>
                            <TableItem title="日志类型" prop="kind"></TableItem>
                            <TableItem title="IP" prop="ip"></TableItem>
                            <TableItem title="创建时间" prop="createdAt"></TableItem>
                            <div slot="empty">暂无数据</div>
                        </Table>
                        <br>
                        <Pagination v-model="pagination" @change="currentChange" :small="true" layout="total,sizes,pager,jumper"></Pagination>
                    </div>
                </div>
            </Cell>

        </Row>
    </div>
</template>

<script>
    export default {
        name: "log",
        data(){
            return {
                isloading: false,
                datas: [],
                pagination: {
                    page: 1,
                    size: 10,
                    total: 100
                },
                kinds:["系统操作","错误日志","用户登录","全站浏览","文章浏览","文章赞","文章踩","文章评论","评论赞","评论踩","评论回复","回复赞","回复踩"],
                data:{
                    kind: null,
                    keyword: ""
                }
            }
        },
        mounted() {
            this.getLogList()
        },
        methods:{
            currentChange(value) {
                this.getLogList()
            },
            getLogList(){
                this.isloading = true
                setTimeout(() => {
                    let items = []
                    for(let i = 1;i < 11 ;i ++){
                        let item = {
                            id: i * Math.ceil(Math.random() * 10000),
                            userId: Math.ceil(Math.random() * 100000),
                            businessId: Math.ceil(Math.random() * 1000),
                            kind: this.kinds[Math.floor(Math.random() * this.kinds.length + 1)],
                            agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36 Aoyou/TCNONid7OWMuPS8nfmNxaAsZpzqkXA184sgEs-vvCXsI157l-6N5UQg=",
                            ip: (Math.ceil(Math.random() * 255)) + "." + (Math.ceil(Math.random() * 255))  + "." + (Math.ceil(Math.random() * 255))  + "." + (Math.ceil(Math.random() * 255)),
                            createdAt: new Date()
                        }
                        items.push(item)
                    }
                    this.datas = items
                    this.isloading = false
                },800)
            }
        }
    }
</script>

<style scoped>

</style>
