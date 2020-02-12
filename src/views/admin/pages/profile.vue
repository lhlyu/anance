<template>
    <div class="an-profile">
        <Row :space="9">
            <Cell :width="12">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border an-glass">
                        <div class="h-panel-bar">
                            <Avatar :src="src" shape="square">
                                <div class="primary-color"><Nameplate :data="{role:'Lv9.守护者',name:'谕℃'}"></Nameplate></div>
                                <p class="primary1-color" style="font-size: 12px">虚无缥缈 时过云烟</p>
                            </Avatar>
                        </div>
                        <div class="h-panel-body">

                        </div>
                    </div>
                </div>
            </Cell>
        </Row>
    </div>
</template>

<script>

    import Nameplate from '@/components/nameplate'

    export default {
        name: "profile",
        components:{
            Nameplate
        },
        data(){
            return {
                src:"https://portrait.gitee.com/uploads/avatars/user/585/1757827_lhlyu_1578959298.png!avatar100"
            }
        }
    }
</script>

<style scoped>

</style>