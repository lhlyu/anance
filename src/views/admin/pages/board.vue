<template>
    <div class="an-board">
        <Row :space="9">
            <Cell :width="11">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">网站数据</span>
                    </div>
                    <div class="h-panel-body">
                        <div ref="visitChart" style="width: 80%;height:200px;"></div>
                        <div ref="websiteChart" style="width: 80%;height:250px;"></div>
                    </div>
                </div>
            </Cell>
            <Cell :width="11">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border">
                        <div class="h-panel-bar">
                            <span class="h-panel-title primary-color"><i class="h-icon-star"></i> 随心所记</span>
                        </div>
                        <div class="h-panel-bar">
                            <div><Radio v-model="req.type" :datas="gistTypes" :disabled="isloading"></Radio></div>
                        </div>
                        <div class="h-panel-body">
                            <textarea v-model="req.content" :disabled="isloading" class="an-glass" style="width: 100%"></textarea>
                            <br><br>
                            <Button class="primary-color an-glass" transparent :disabled="isloading || req.content.length == 0" @click="save">提交</Button>
                        </div>
                    </div>
                </div>
            </Cell>
            <Cell :width="11">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border">
                        <div class="h-panel-bar">
                            <span class="h-panel-title primary-color">快捷入口</span>
                        </div>
                        <div class="h-panel-body">
                            <br>
                            <router-link to="/admin/create">
                                <span class="an-quick">
                                    开始创作
                                </span>
                            </router-link>
                            <br>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>

    import c from '@/config'

    export default {
        name: "board",
        data(){
            return {
                barBgColor: c.themeColorBg,
                textStyle: { //数值样式
                    color: c.themeColor,
                    fontSize: 12
                },
                gistTypes: c.secretDict,
                req:{
                    type:1,
                    content:""
                }
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init(){
                this.getVisitStat()
                this.getWebsiteStat()
            },
            save(){
                this.L(() => {
                    this.$Message.success("提交成功！")
                    this.req.content = ""
                },"admin.article.add")

            },
            getVisitStat(){
                let visitChart = echarts.init(this.$refs.visitChart)
                var option = {
                    title: {
                        text: "点击率",
                    },
                    tooltip: {},
                    legend: {
                        data:['次']
                    },
                    xAxis: {
                        data: ["大前天","前天","昨天","总点击量"]
                    },
                    yAxis: {},
                    series: [{
                        name: '次',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: this.barBgColor,
                                label: {
                                    show: true, //开启显示
                                    position: 'top', //在上方显示
                                    textStyle: this.textStyle
                                }
                            },
                        },
                        data: [196,210,120,819]
                    }]
                };
                visitChart.setOption(option);
            },
            getWebsiteStat(){
                let websiteChart = echarts.init(this.$refs.websiteChart)
                var option = {
                    dataset: {
                        source: [
                            ['数量', 'name'],
                            [12, '用户'],
                            [56, '文章'],
                            [5, '分类'],
                            [36, '评论'],
                        ]
                    },
                    grid: {containLabel: true},
                    xAxis: {name: '数量'},
                    yAxis: {type: 'category'},
                    series: [
                        {
                            type: 'bar',
                            encode: {
                                x: 'number',
                                y: 'name'
                            },
                            itemStyle: {
                                normal: {
                                    color: this.barBgColor,
                                    label: {
                                        show: true, //开启显示
                                        position: 'right',
                                        textStyle: this.textStyle
                                    }
                                },
                            },
                        }
                    ]
                };
                websiteChart.setOption(option);
            },
            getMockDay(){
                let day = new Date()
                let arr = []
                for(let i = 6;i < 1;i--){
                    let v = day - i * 3600 * 24
                    arr.push(new Date(v).getDay())
                }
            },
        }

    }
</script>

<style scoped lang="scss">
    .an-board{
        .an-quick{
            padding: 20px 30px;
            background: rgba(#ffffff,0.65);
        }
    }

</style>
