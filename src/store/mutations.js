export default {
  addCounter(state,payload){
    state.CartList[payload].count++
  },
  addCartList(state,payload){
    payload.count = 1
    payload.checked = false
    state.CartList.push(payload)
  },
  listcheckedAll(state){
    console.log('listcheckedAll')
    for (let i=0;i<state.CartList.length;i++){
      if (!state.CartList[i].checked) {
        console.log('listcheckedAll if')
        state.CartList[i].checked= !state.CartList[i].checked
      }
    }
  },
  listuncheckedAll(state){
    console.log('listuncheckedAll')
    for (let i=0;i<state.CartList.length;i++){
      if (state.CartList[i].checked) {
        console.log('listuncheckedAll if')
        state.CartList[i].checked= !state.CartList[i].checked
      }
    }
  }
}
