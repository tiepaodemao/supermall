export default {
  cartLength(state) {
    return state.CartList.length
  },
  cartList(state){
    return state.CartList
  },
  checkLength(state){
    return state.CartList.filter(item => {
      return item.checked
    }).length
  }
}
