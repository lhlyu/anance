<template>
    <div class="an-board">
        <Row :space="9">
            <Cell :width="12">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border">
                        <div class="h-panel-bar">
                            <span class="h-panel-title primary-color"><i class="h-icon-star"></i> 随心所记</span>
                        </div>
                        <div class="h-panel-bar">
                            <div><Radio v-model="data.type" :datas="gistTypes" :disabled="isloading"></Radio></div>
                        </div>
                        <div class="h-panel-body">
                            <textarea v-model="data.content" :disabled="isloading" class="an-glass" style="width: 100%"></textarea>
                            <br><br>
                            <Button class="primary-color an-glass" transparent :disabled="isloading || data.content.length == 0" @click="save">提交</Button>
                        </div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "board",
        data(){
            return {
                isloading: false,
                gistTypes:{1:"仅自己可见",2:"所有人可见"},
                data:{
                    type:1,
                    content:""
                }
            }
        },
        methods:{
            save(){
                this.isloading = true
                setTimeout(()=>{
                    this.$Message.success("提交成功！")
                    this.data.content = ""
                    this.isloading = false
                },1000)
            }
        }

    }
</script>

<style scoped lang="scss">
    .an-board{

    }

</style>
