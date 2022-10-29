<template>
  <!-- <i class="iconfont icon-arrow_left"></i> -->
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
