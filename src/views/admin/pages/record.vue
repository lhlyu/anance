<template>
    <div class="an-log">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">日志管理</span>
                    </div>
                    <div class="h-panel-bar">
                        <Row :space="9">
                            <Cell :width="12"><Select v-model="req.kind" placeholder="日志类型" :datas="kindDict"></Select></Cell>
                            <Cell :width="12"><DateRangePicker v-model="req.range" placeholder="日期范围" format="YYYY-MM-DD"></DateRangePicker></Cell>
                            <Cell :width="8"><NumberInput v-model="req.target" placeholder="目标ID(仅数字)" :min="1"></NumberInput></Cell>
                            <Cell :width="8"><NumberInput v-model="req.userId" placeholder="用户ID(仅数字)" :min="1"></NumberInput></Cell>
                            <Cell :width="8"> <Button @click="load" :disabled="isloading" transparent text-color="primary">搜索</Button></Cell>
                        </Row>
                    </div>
                    <div class="h-panel-body">
                        <Table :datas="datas" :loading="isloading">
                            <TableItem title="ID" prop="id" align="center"></TableItem>
                            <TableItem title="日志类型">
                                <template slot-scope="{data}">
                                    {{kinds[data.kind]}}
                                </template>
                            </TableItem>
                            <TableItem title="用户ID" prop="userId"></TableItem>
                            <TableItem title="目标ID" prop="target"></TableItem>

                            <TableItem title="创建时间">
                                <template slot-scope="{data}">
                                    <Time type="datetime" :time="data.createdAt"></Time>
                                </template>
                            </TableItem>
                            <TableItem title="操作">
                                <template slot-scope="{data}">
                                    <span class="text-hover" @click="open(data)">{{data._expand?'收起':'详情'}}</span>
                                </template>
                            </TableItem>
                            <template slot="expand" slot-scope="{index, data}">
                                <Block :data="data.content"></Block>
                            </template>
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
    import Block from '@/components/block'

    import c from '@/config'

    export default {
        name: "record",
        components:{
            Time,
            Block
        },
        data(){
            return {
                kinds:c.recordKindArray,
                kindDict:c.recordKindDict,
                datas: [],
                req:{
                    page: {
                        pageNum: 1,
                        pageSize: 10,
                        total: 100
                    },
                    kind: 0,
                    range: null,
                    target: null,
                    userId: null
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
            open(data) {
                this.$set(data, '_expand', !data._expand);
            },
            load(){
                this.L(() => {
                    let items = []
                    let date = +new Date()
                    for(let i = 0; i < 10; i ++){
                        let item = {
                            id: this.rd(1000,10),
                            kind: this.rd(this.kinds.length),
                            userId: this.rd(10000,10000),
                            target: this.rd(100,10),
                            createdAt: date - i * 1000,
                            ip: `${this.rd(255)}.${this.rd(255)}.${this.rd(255)}.${this.rd(255)}`,
                        }
                        item.content = `<code><pre>${JSON.stringify(item,null,4)}</code></pre>`
                        item._expand = false
                        items.push(item)
                    }
                    this.datas = items
                },"admin.record")
            }
        }
    }
</script>

<style scoped>

</style>
