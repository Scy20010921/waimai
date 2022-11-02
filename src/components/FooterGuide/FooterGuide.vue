<template>
  <div id="app">
    <footer class="footer_guide border-1px">
      <router-link to="/msite" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </router-link>
      <router-link to="/search" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </router-link>
      <router-link to="/order" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </router-link>
      <router-link to="/profile" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </router-link>
    </footer>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  name: 'FooterGuide',
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
.footer_guide {
  border-top: 1px solid #e4e4e4; //上边框线
  position: fixed; //固定定位
  z-index: 100; //优先级
  left: 0; //固定定位靠左边0px
  right: 0; //固定定位靠右边0px
  bottom: 0; //固定定位靠下边0px
  background-color: #fff; //背景颜色
  width: 100%; //宽度100%
  height: 50px; //高度50px
  display: flex; //弹性布局 可以让盒子里面的数据同等对齐
  .guide_item {
    display: flex; //弹性布局 可以让盒子里面的数据同等对齐
    flex: 1; //占上级盒子的几份
    text-align: center; //文字居中
    flex-direction: column; //水平居中
    align-items: center; //垂直居中
    margin: 5px; //外边距
    color: #999999;
    &.on {
      color: red;
    }
    span {
      font-size: 12px; //图标大小
      margin-top: 2px; //上边距
      margin-bottom: 2px; //下边距
      .iconfont {
        font-size: 22px;
      }
    }
  }
}
@import '../../less/index';
</style>