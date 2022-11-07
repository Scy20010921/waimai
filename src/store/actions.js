// 通过mutation间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEI_USER_INFO,
  RECEIVE_Goods,
  RECEIVE_Ratings,
  RECEIVE_Info,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
} from './mutations-types'
//导入api里面的数据
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
} from '../api'

export default {
  //异步获取地址 方法
  async getAddress({ commit, state }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  //异步获取食品分类列表
  async getFoodCategorys({ commit }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  //异步获取商家列表
  async getShops({ commit, state }) {
    // 发送异步ajax请求

    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },
  //同步记录用户信息
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  //异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {
        userInfo,
      })
    }
  },
  //异步登出
  async logout({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RECEI_USER_INFO)
    }
  },
  //异步获取商家商品数组
  async getShopGoods({ commit }, callback) {
    // 发送异步ajax请求
    const result = await reqShopGoods()
    // 提交一个mutation
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_Goods, { goods })
      callback && callback()
    }
  },
  //异步获取商家商品数组
  async getShopRatings({ commit }) {
    // 发送异步ajax请求
    const result = await reqShopRatings()
    // 提交一个mutation
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_Ratings, { ratings })
    }
  },
  //异步获取商家商品数组
  async getShopInfo({ commit }) {
    // 发送异步ajax请求
    const result = await reqShopInfo()
    // 提交一个mutations
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_Info, { info })
    }
  },
  //同步更新food中的count值
  updataFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
}
