<template>
    <div v-if="data" class="an-nameplate">
        <div class="an-nameplate-role">
            <span class="bg-primary-color">{{getRoleName(data.role)}}</span>
        </div>
        <div class="an-nameplate-name primary-color">
            {{data.nickName || data.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            data: {
                type: Object,
                default: null
            }
        },
        data(){
            return {

            }
        },
        methods:{
            getRoleName(role){
                let type = Object.prototype.toString.call(role)
                if(type != `[object Number]`){
                    role = 0
                }
                if(role < 0 || role >= this.$roles.length){
                    role = 0
                }
                return this.$roles[role]
            }
        }
    }
</script>

<style scoped lang="scss">
    .an-nameplate{
        display: flex;
        flex-direction: row;
        .an-nameplate-role{
            width: 76px;
            span{
                color: white;
                padding: 4px 5px;
                border-radius: 3px;
                font-size: 12px;
            }
        }
        .an-nameplate-name{
            flex: 1;
        }
    }
</style>
