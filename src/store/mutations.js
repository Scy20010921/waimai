// 直接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEI_USER_INFO,
  RECEIVE_Goods,
  RECEIVE_Ratings,
  RECEIVE_Info,
} from './mutations-types'
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RECEI_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_Goods](state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_Ratings](state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_Info](state, { info }) {
    state.info = info
  },
}
