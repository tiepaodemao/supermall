import {ADDCARTLIST,ADDCOUNTER} from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve,reject)=> {
      let temp=true
      for (let i = 0; context.state.CartList.length !=0 && i<context.state.CartList.length; i++){
        if (context.state.CartList[i].iid === payload.iid){
          context.commit(ADDCOUNTER, i)
          temp=false
        }
      }
      if (temp) {
        context.commit(ADDCARTLIST,payload)
        resolve('添加了新商品')
      }else {
        resolve('当前商品加数量加1')
      }
    })
  }
}
