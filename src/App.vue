<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 414px;
  height: 812px;
}

@media screen and (min-width: 1000px) {
  #app {
    margin: 0 auto;
  }
}
</style>
