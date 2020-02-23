<template>
    <div class="an-setting">
        <Row :space="9">
            <Cell :width="23">
                <div class="h-panel">
                    <div class="h-panel-bar">
                        <span class="h-panel-title primary-color">网站管理</span>
                    </div>
                    <div class="h-panel-bar">
                        <div><h-switch v-model="isloading" :small="true">{{!isloading ? "只读模式":"编辑模式"}}</h-switch></div>
                    </div>
                    <div class="h-panel-body">
                        <Form v-if="req" labelPosition="left" :labelWidth="120" >
                            <FormItem label="网站标题">
                                <input v-model="req.title" type="text" :readonly="!isloading">
                            </FormItem>
                            <FormItem label="网站签名">
                                <input v-model="req.bio" type="text" :readonly="!isloading">
                            </FormItem>
                            <FormItem label="开放评论">
                                <h-switch :disabled="!isloading" v-model="req.openComment" :small="true">{{req.openComment ? "开启":"关闭"}}</h-switch>
                            </FormItem>
                            <FormItem label="评论审查">
                                <h-switch :disabled="!isloading" v-model="req.checkComment" :small="true">{{req.checkComment ? "开启":"关闭"}}</h-switch>
                            </FormItem>
                            <FormItem label="网站Footer">
                                <textarea  v-model="req.footer" :readonly="!isloading" ></textarea>
                            </FormItem>
                            <FormItem label="网站背景">
                                <Uploader type="image" :files="files" dataType="url">
                                </Uploader>
                            </FormItem>
                            <Button @click="save" :disabled="!isloading"  transparent text-color="primary">修改</Button>
                        </Form>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>


    export default {
        name: "setting",
        data(){
            return {
                options: {
                    max_file_size: '1mb',
                    filters: {
                        mime_types: [
                            { title: 'Image files', extensions: 'jpg,gif,png' }
                        ]
                    }
                },
                files: [],
                req: null
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.req = this.$website
            })
        },
        methods:{
            save(){
                this.L(() => {
                    this.$Message.success("修改成功！")
                },"admin.setting.edit")
            },
        }

    }
</script>

<style scoped>

</style>
