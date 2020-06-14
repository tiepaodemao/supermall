<template>
    <div class="bottom-bar">
      <div class="bar-left bar-item">
        <div class="service">
          <img src="~assets/images/bottombar/service.png"/>
          <p>客服</p>
        </div>
        <div class="shop">
          <img src="~assets/images/bottombar/shop.png"/>
          <p>店铺</p>
        </div>
        <div class="favorite">
          <img src="~assets/images/bottombar/favorite.png"/>
          <p>收藏</p>
        </div>
      </div>
      <div class="bar-right bar-item">
        <div class="cart" @click="addCart">
          加入购物车
        </div>
        <div class="purchase">
          购买
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailBottomBar",
      methods: {
        addCart(){
          this.$emit("addCart")
        }
      }
    }
</script>

<style scoped>
  .bottom-bar {
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    font-size: 14px;

  }
  .bar-item {
    display: flex;
    flex: 1;
  }
  .bar-item > div {
    flex: 1;
  }
  .bar-right{
    display: flex;
  }
  .cart {
    background-color: #26bdd7;
  }
  .purchase{
    background-color: #40cc42;
  }
  .bar-left > div {
    background-color: #f8fefa;
  }
  img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 5px auto 0;
  }
  bar-left > div {
    line-height: 8px;
    text-align: center;
  }
  p {
    position: relative;
    top: -12px;
  }
</style>
