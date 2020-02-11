<template>
  <div id="app">
    <BG :url="url"></BG>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import BG from "@/components/bg"

  export default {
    components: {
      BG
    },
    data() {
      return {
        url: "https://cdn.jsdelivr.net/gh/lhlyu/pb@master/2020/violet.png",
      }
    }
  }
</script>

<style lang="scss">
  body{
    width: 100vw !important;
    scroll-behavior: smooth;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    min-height: 100vh;
  }

  .an-glass,.h-menu-ul{
    background: rgba(#ffffff,0.3) !important;
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
</style>
