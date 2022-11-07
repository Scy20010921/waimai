<template>
  <div class="app">
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/shopgoods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/shopRatings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/shopinfo">商家</router-link>
      </div>
    </div>
    <div class="cses">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'

export default {
  name: 'Shop',
  mounted() {
    //只能导入一个
    this.$store.dispatch('getShopInfo')

  },
  components: {
    ShopHeader
  },

}
</script>

<style lang="stylus">
@import '../MSite/mixins';

.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  bottom-border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

    a {
      display: block;
      position: relative;

      &.router-link-active {
        color: #02a774;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a7 7;
        }
      }
    }
  }
}
</style>