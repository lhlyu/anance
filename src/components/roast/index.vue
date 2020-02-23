<template>
    <div v-if="data" class="an-roast">
        <div class="an-roast-header">
            <img :src="url" :alt="data.nickName" width="32" height="32" >
            <div class="an-roast-name primary-color">{{data.nickName}}</div>
        </div>
        <div class="an-roast-body">
            <div class="an-roast-at" v-if="data.atUserId > 0">
                @{{data.atNickName}}：
            </div>
            <div class="an-roast-content">
                {{data.content}}
            </div>
        </div>
        <div class="an-roast-footer">
            <div class="an-roast-info gray-color">
                <div class="an-roast-btn"><i class="h-icon-message" aria-hidden="true"  v-tooltip placement="top" content="点击打开评论 | 再次点击关闭评论" @click="reply"></i></div>
                <div class="an-roast-btn">
                    <i v-if="data.hasLike == 0" class="h-icon-star" @click="changeLike"></i>
                    <i v-else class="h-icon-star-on" @click="changeLike"></i>
                </div>
                <div class="an-roast-btn"><Time :time="data.createdAt"></Time></div>
            </div>
            <div class="an-roast-reply" v-if="openReply">
                <div class="h-input-group" v-width="300">
<!--                    <textarea v-autosize v-model="req.content" rows=1 placeholder="请输入"></textarea>-->
                    <input type="text" :disabled="isloading" v-model="req.content" placeholder="输入" />
                    <Button color="primary" :disabled="isloading || req.content.length == 0" size="xs" @click="save">回复</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Time from '@/components/time'

    import utils from "@/utils"

    export default {
        name: "index",
        components:{
            Time
        },
        props:{
            data: {
                type: Object,
                default: null
            }
        },
        data(){
            return {
                url:"https://cdn.jsdelivr.net/gh/lhlyu/pb@master/2020/visitor.jpg",
                openReply: false,
                req: {
                    content: ""
                }
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init(){
                this.lazyAvatar()
            },
            lazyAvatar(){
                if(!this.data || this.data.avatar.length == 0){
                    return
                }
                let that = this
                utils.loadImageAsync(this.data.avatar).then(v => {
                    if(v.src){
                        that.url = v.src
                    }
                })
            },
            reply(){
                this.openReply = !this.openReply
            },
            changeLike(){
                this.data.hasLike = this.data.hasLike == 1 ? 0 : 1
                this.L(() => {
                    if(this.data.hasLike == 1){
                        this.$Message.success("点赞成功！")
                    }else{
                        this.$Message.success("取消点赞成功！")
                    }
                },"visit.comment.edit")
            },
            save(){
                this.L(() => {
                    this.$Message.success("回复成功！")
                    this.req.content = ""
                },"visit.comment.add")
            }
        }
    }
</script>

<style scoped lang="scss">
    .an-roast{
        padding: 5px;
        display: flex;
        flex-direction: column;
        .an-roast-header{
            height: 32px;
            display: flex;
            flex-direction: row;
            img{
                width: 35px;
                border-radius: 50%;
                object-fit: cover;
                animation: all 0.5s linear;
                cursor: pointer;
            }
            .an-roast-name{
                flex: 1;
                margin-left: 10px;
                line-height: 32px;
                cursor: pointer;
            }
        }
        .an-roast-body{
            flex: 1;
            display: flex;
            flex-direction: row;
            padding: 5px 0;
            .an-roast-at{
                width: content-box;
                color: #1B9CFC;
                cursor: pointer;
            }
            .an-roast-content{
                flex: 1;
                cursor: pointer;
            }
        }
        .an-roast-footer{
            height: content-box;
            .an-roast-info{
                width: 100px;
                display: flex;
                flex-direction: row;
                .an-roast-btn{
                    cursor: pointer;
                }
                .an-roast-btn:not(:last-child){
                    flex: 1;
                }
                .an-roast-btn:last-child{
                    width: content-box;
                }
            }
            .an-roast-reply{
                margin: 8px 0;
            }
        }
    }
</style>
