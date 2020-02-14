<template>
    <div class="an-stat">
        <Row :space="9">
            <Cell :width="12">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">点击率</span>
                    </div>
                    <div class="h-panel-body">
                        <div ref="visitChart" style="width: 100%;height:400px;"></div>
                    </div>
                </div>
            </Cell>
            <Cell :width="12">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">网站数据</span>
                    </div>
                    <div class="h-panel-body">
                        <div ref="websiteChart" style="width: 100%;height:400px;"></div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "stat",
        data(){
            return {
                barBgColor: "rgba(251,114,153,0.3)",
                textStyle: { //数值样式
                    color: '#fb7299',
                    fontSize: 12
                }
            }
        },
        mounted() {
            this.getVisitStat()
            this.getWebsiteStat()
        },
        methods:{
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
                        data: ["大前天","前天","昨天","总量"]
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
                            [10, '标签'],
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

<style scoped>

</style>
