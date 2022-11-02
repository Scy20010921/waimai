import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/msite' },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    { path: '/login', component: Login },
    {
      path: '/shop',
      component: Shop,
      children: [
        { path: '', redirect: '/shop/shopgoods' },
        { path: '/shop/shopgoods', component: ShopGoods },
        { path: '/shop/shopRatings', component: ShopRatings },
        { path: '/shop/shopinfo', component: ShopInfo },
      ],
    },
  ],
})
