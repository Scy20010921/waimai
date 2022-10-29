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

<style>
</style>