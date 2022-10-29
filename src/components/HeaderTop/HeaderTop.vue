<template>
  <div id="app">
    <header class="header">
      <slot name="left"></slot>
      <a class="header_title">
        <span class="header_title_text">{{title}}</span>
      </a>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>>
.header {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;

      .icon-sousuo {
        font-size: 25px;
        color: #fff;
      }
    }
</style>