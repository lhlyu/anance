<template>
    <div class="an-profile">
        <Row :space="9">
            <Cell :width="12">
                <div class="an-gist">
                    <div class="h-panel h-panel-no-border">
                        <div class="h-panel-bar">
                            <Avatar :src="$user.avatar" shape="square">
                                <div class="primary-color"><Nameplate :data="$user"></Nameplate></div>
                                <p class="primary1-color" style="font-size: 12px">{{$user.bio}}</p>
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
            }
        }
    }
</script>

<style scoped>

</style>
