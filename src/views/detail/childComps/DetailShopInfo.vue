<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.shopLogo">
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="info-sells shop-together">
        <span>{{sellCountFilter}}</span>
        <br/>
        <span>总销量</span>
      </div>
      <div class="info-goods shop-together">
        <span>{{shop.cGoods}}</span>
        <br/>
        <span>全部宝贝</span>
      </div>
      <div class="shop-middle-right">
        <div v-for="item in shop.score">
          <span>
            {{item.name}}
            <span :style="isBetter(item)">
              {{item.score}}
              {{item.score ? '高' : '低'}}
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <a>
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailShopInfo",
      props: {
        shop:{
          type: Object,
          default: {}
        }
      },
      computed:{
        sellCountFilter(){
          let result=this.shop.cSells;
          if (result > 10000){
           return (result/10000).toFixed(1)+ '万'
          }
          return result
        }
      },
      methods:{
        isBetter(item){
          if (item.isBetter) {
            return 'color:red'
          }
          return 'color:green'
        }
      }
    }
</script>

<style scoped>
  .shop-info {
    padding: 10px 0;
  }
  .shop-top{
    margin: 10px 0;
  }
  .shop-top>img{
    width: 50px;
    height: 50px;
    vertical-align:middle
  }
  .shop-top>span{
    margin-left: 20px;
  }
  .shop-title{
    font-size: 20px;
  }

  .shop-middle{
    display: flex;
    margin: 10px 0;
  }
  .shop-middle>span{
    font-size: 50px;
  }
  .info-sells{
    flex: 1;
  }
  .info-goods{
    flex: 1;
  }
  .shop-together{
    line-height: 25px;
    text-align: center;
  }
  .shop-middle-right{
    flex: 2;
    border-left: 2px solid #d4dae1;
    padding-left: 20px;
  }
  .shop-bottom{
  }
  .shop-bottom>a{
    display: block;
    margin: auto;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100px;
    background-color: #e6e6e6;
    border-radius:10px;
  }
  .shop-bottom>a:hover{
    color: red;
  }
</style>
