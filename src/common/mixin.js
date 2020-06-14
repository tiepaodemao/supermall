import {debounce} from "common/utils";
export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null,
      newrefresh: null
    }

  },
  mounted(){
    this.newrefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener= () => {
      this.newrefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    console.log('我是混入中的内容');
  }
}
