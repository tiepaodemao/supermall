<template>
  <div id="home">
    <nav-bar id="home-bav">
      <div slot="left"></div>
      <div slot="center">购物</div>
      <div slot="right"></div>
    </nav-bar>
    <tab-control :class="{fixed: isTabFixed}" v-show="isTabFixed"  ref="tabControl1" :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <scroll class="content" ref="scroll" :probe-type="2" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore" >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <fature-view/>
      <tab-control ref="tabControl2" :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendView from 'views/home/childComps/RecommendView'
  import FatureView from 'views/home/childComps/FatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata,getHomeGoods} from 'network/home'
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "common/mixin";

  export default {
    name: "Home",
    mixins:[itemListenerMixin],
    data(){
      return{
        banners: [],
        recommends: [],
        goods:{
          'pop':{page: 0, list: []},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []}
        },
        currentType:'pop',
        isShowBackTop: false,
        tabOffsetTop : 0,
        isTabFixed : false,
        saveY : 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      console.log(this.goods)
    },
    mounted() {
      console.log("home-mounted")
    },

    activated() {
      this.$refs.scroll.scrollTo(0 , this.saveY)
      this.$refs.scroll.refresh()
      console.log('home-deactivated');
      let refresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener= () => {
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
      console.log('home-activated');

    },
    deactivated() {
      this.$bus.$off("itemImageLoad",this.itemImgListener)
      this.saveY = this.$refs.scroll.getScrollY()
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      //scroll的事件
      backClick(){
        this.$refs.scroll.scrollTo(0 , 0 ,500 )
        console.log('回到顶部11111');
      },
      contentScroll(position){
        // console.log(position)
        // this.saveY = position.y
        this.isShowBackTop = position.y <= -200
        this.isTabFixed = this.tabOffsetTop < (-position.y)

      },
      loadMore(){
        console.log('上拉加载更多')
        this.getHomeGoods(this.currentType);
        setTimeout(() => {
          this.$refs.scroll.finishPullUp()
        },2000)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      // 网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        console.log(page);
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++;
        })
      }
    }
  }
</script>

<style scoped>
  #home-bav{
    /*background-color: var(--color-tint);*/
    /*color: rgb(12, 121, 34);*/
    /*position:fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 1;*/
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom:44px;
    /*height: calc(100vh - 44px - 49px);*/
  }
  .back-top {
    position: fixed;
    bottom: 50px;
    right: 20px;
  }
  .fixed {
    position: fixed;
    left: 0;
    /*top: 44px;*/
    z-index: 8;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
