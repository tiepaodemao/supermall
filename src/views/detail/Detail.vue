<template>
  <div>
    <detail-nav-bar ref="bar" class="detail-nav-bar" @titleClick="titleClick"/>
    <scroll class="scroll" :probe-type="2" ref="scroll" @scroll="detailScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-image-info ref="image" :detail-info="detailInfo" @imageLoad="detailImageLoad"/>
      <detail-param-info :detail-params="itemParams"/>
      <goods-list ref="list" class="detail-goods-list" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart="addToCart"/>
    <back-top v-show="this.positionY > 300" class="back-top" @click.native="backTop"/>
    <toast :message="toastMessage" :show="toastShow"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import DetailImageInfo from './childComps/DetailImageInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import BackTop from 'components/content/backTop/BackTop'
  import Toast from 'components/common/toast/Toast'

  import {Goods} from "network/detail";
  import {getDetail} from "network/detail";
  import {getRecommend} from "../../network/detail";
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "common/mixin";
  import {mapActions} from 'vuex'



  export default {
      name: "Detail",
      components:{
        BackTop,
        DetailBottomBar,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailParamInfo,
        DetailCommentInfo,
        Scroll,
        GoodsList,
        BackTop,
        Toast
      },
      props: {
        goodItem:{
          type: Array,
          default: null
        }
      },
      mixins:[itemListenerMixin],
      data(){
        return{
          iid: null,
          res: null,
          topImages: null,
          goodsInfo: {},
          shopInfo: {},
          detailInfo:{},
          itemParams:{},
          commentInfo:{},
          recommends:[],
          themeTopYs:[],
          getThemeTopYs: null,
          positionY: 0,
          currentIndex: 0,
          toastMessage: '默认',
          toastShow: false
        }
      },
      methods: {
        detailImageLoad(){
          this.newrefresh();
          this.getThemeTopYs();
        },
        titleClick(index){
          console.log(index)
          this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
        },
        detailScroll(position){
          this.positionY = -position.y
          console.log(this.positionY);
          const length = this.themeTopYs.length;
          // 0: 0 - 706
          // 1: 706 - 1035
          // 2: 1035 - 17575
          // 3: 17575 - ...
          if (this.positionY > this.themeTopYs[3]) {
            this.$refs.bar.currentIndex = 3
          }else if (this.positionY > this.themeTopYs[2] && this.positionY < this.themeTopYs[3]) {
            this.$refs.bar.currentIndex = 2
          }else if (this.positionY > this.themeTopYs[1] && this.positionY < this.themeTopYs[2]){
            this.$refs.bar.currentIndex = 1
          }else if ((this.positionY > this.themeTopYs[0] && this.positionY < this.themeTopYs[1]) || this.positionY < this.themeTopYs[0]){
            this.$refs.bar.currentIndex = 0
          }
        },
        backTop(){
          console.log("回到顶部")
          this.$refs.scroll.scrollTo(0,0,300);
        },
        addToCart(){
          const product = {
            image : this.topImages[0],
            title : this.goodsInfo.title,
            desc : this.goodsInfo.desc,
            price : this.goodsInfo.realPrice,
            iid : this.iid
          }
          this.addCart(product).then(res => {
            this.toastMessage=res
            this.toastShow=true
            setTimeout(() => {
              this.toastShow=false
              this.toastMessage=''
            },1500)
          })
        },
        ...mapActions(['addCart'])
      },
      created() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then((res) => {
          this.res = res;
          const data=res.result
          console.log(data);
          this.topImages = data.itemInfo.topImages;
          console.log(this.topImages);
          this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shopInfo = data.shopInfo
          this.detailInfo  = data.detailInfo
          this.itemParams = data.itemParams
          if (data.rate.cRate !==0 ){
            this.commentInfo = data.rate.list[0]
          }
        })
        getRecommend().then((res) => {
          this.recommends = res.data.list
          // console.log(this.recommends);
        })
      },
      mounted() {
        this.getThemeTopYs = debounce( ()=> {
          let temp = []
          temp.push(0)
          temp.push(this.$refs.comment.$el.offsetTop)
          temp.push(this.$refs.image.$el.offsetTop)
          temp.push(this.$refs.list.$el.offsetTop)
          this.themeTopYs = temp
          console.log(this.themeTopYs);
        },100)
      },
      updated(){
        // let temp = []
        // temp.push(0)
        // temp.push(this.$refs.comment.$el.offsetTop)
        // temp.push(this.$refs.image.$el.offsetTop)
        // temp.push(this.$refs.list.$el.offsetTop)
        // this.themeTopYs = temp
        // console.log(this.themeTopYs);
      },
      destroyed(){
        this.$bus.$off("itemImageLoad",this.itemImgListener)
      },
    }
</script>

<style scoped>
  .scroll{
    height: calc(100vh - 50px - 40px);
    background-color: white;
    position: absolute;
    z-index: 3;
    top: 40px;
    bottom: 50px;
    /*height: auto;*/
  }
  .detail-nav-bar{
    position: relative;
    z-index: 5;
  }
  .detail-goods-list{
    border-top: 5px solid #e8eeea;
    margin-top: 20px;
    padding-top: 10px;
  }
  .bottom-bar{
    position: fixed;
    z-index: 4;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .back-top{
    position: fixed;
    bottom: 50px;
    right: 10px;
    z-index: 5;
  }
</style>
