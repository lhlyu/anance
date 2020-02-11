<template>
    <div>
        <BG></BG>
        <TagInput v-model="value" :limit="10" :wordlimit="20"></TagInput>
        <Button color="primary">主色系按钮</Button>
    </div>
</template>

<script>
    import BG from "@/components/bg"

    export default {
        components:{
            BG
        }
    }
</script>

<style scoped>

</style>