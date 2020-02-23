<template>
  <div id="app">
    <BG :url="$website.bg"></BG>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import BG from "@/components/bg"

  export default {
    components: {
      BG,
    }
  }
</script>

<style lang="scss">
  *{
    scroll-behavior: smooth;
  }
  body{
    width: 100vw !important;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    min-height: 100vh;
  }

  .h-select-show,
  .h-autocomplete-show,
  .h-numberinput-show{
    @extend .an-glass;
  }

  .limit-row{
    white-space:nowrap;/*规定段落中的文本不进行换行*/
    overflow:hidden;/*内容会被修剪，并且其余内容是不可见的。*/
    text-overflow:ellipsis;/*显示省略号来代表被修剪的文本*/
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-leave, .fade-enter-to {
    opacity: 1
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s
  }

  .v-enter{
    opacity: 0;
  }
  .v-leave-to{
    display: none;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.4s ease;
  }
</style>
