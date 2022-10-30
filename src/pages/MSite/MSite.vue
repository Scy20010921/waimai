<template>
  <div>
    <section class="msite">
      <!--首页头部-->
      <HeaderTop title="昌平区北七家宏福大武当撒">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <router-link to="/login"><span class="header_login_text">登录|注册</span></router-link>

        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper" v-if="categorys.length">
          <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>

            </div>

          </div>

          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else>

      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList></ShopList>
      </div>
    </section>

  </div>

</template>



<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'


export default {
  name: 'MSite',
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted() { //创建到消灭中间经过的过程 发起请求
    this.$store.dispatch('getFoodCategorys')
    this.$store.dispatch('getShops')
    //创建一个Swiper实例对象,来实现轮播图


  },

  //计算属性
  computed: {
    ...mapState(['address', 'categorys']),
    // 根据categorys一维数组生成一个二维数组
    // 小数组中的元素个数最大的是8
    categorysArr() {
      const { categorys } = this
      //准备一个空的二维数组
      const arr = []
      // 准备一个小数组(最大长度为8 )
      let minArr = []
      //遍历categorys
      categorys.forEach(c => {
        // 如果当前小数组已经满了,创建一个新的
        if (minArr.length === 8) {
          minArr = []
        }
        // 如果minArr是空的,把小数组放进大数组里面去
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        // 将当前分类保存到小数组中
        minArr.push(c)

      })
      return arr
    }
  },
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  },
  watch: {
    //监视
    categorys(value) {    //数组中有数据    在异步更新界面之前执行
      //使用setTimeou可以实现效果,但不是最好的
      // setTimeout(() => {  //等待100后执行 在异步更新界面之后执行
      //   new Swiper('.swiper', {
      //     loop: true, //可以循环播放
      //     pagination: '.swiper-pagination',
      //   })
      // }, 100)
      //界面更新就立即创建Swiper对象
      this.$nextTick(() => {
        // 一旦完成界面更新,立即执行调用(此条语句要写在数据更新之后)
        new Swiper('.swiper', {
          loop: true, //可以循环播放
          pagination: '.swiper-pagination',
        })
      })
    }
  },
  components: {
    HeaderTop,
    ShopList,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './mixins';

.msite {
  width: 100%;

  .msite_header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

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

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }

    .header_login {
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      .header_login_text {
        color: #fff;
      }
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 220px;
    background: #fff;

    .swiper {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}

.yichu {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>