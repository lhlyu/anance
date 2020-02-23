<template>
    <div v-if="data" class="an-block" v-high="high" v-line="line" v-html="data">
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            data: {
                type: String,
                default: null
            },
            high: {
                type: Boolean,
                default: true
            },
            line: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .an-block{
        padding: 5px 5px 3px 10px;
        line-height: 1.5;
        font-weight: 600;
        border-left: 4px solid $themeColor;
        font-size: 12px;
        margin: 20px 0;
        table{
            all: revert;
        }

        .hljs-ln-numbers {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            text-align: left;
            color: #ccc;
            border-right: 1px solid #CCC;
            vertical-align: top;
            padding-right: 5px;

        }

        .hljs-ln-code {
            padding-left: 10px;
        }
    }
</style>
