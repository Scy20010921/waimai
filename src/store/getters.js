// 包含多个基于state的getter计算属性的对象
export default {
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },
  //同步满意数量
  positiveSize(state) {
    return state.ratings.reduce(
      (preTotal, ratings) => preTotal + (ratings.rateType === 0 ? 1 : 0),
      0
    )
  },
}
