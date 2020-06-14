<template>
  <div class="shop-item">
    <check-button class="item-check" @click.native="checkClick" :is-check="itemInfo.checked"/>
    <div class="item-img">
      <img :src="itemInfo.image">
    </div>
    <div class="item-info">
      <p class="item-title">{{itemInfo.title}}</p>
      <p class="item-desc">{{itemInfo.desc}}</p>
        <div class="item-button">
          <p class="item-price">{{itemInfo.price}}</p>
          <p class="item-count">x {{itemInfo.count}}</p></div>
      </div>
  </div>
</template>

<script>
    import CheckButton from "./CheckButton";
    export default {
      name: "CartListItem",
      components:{CheckButton},
      props: {
        itemInfo: Object
      },
      methods: {
        checkClick(){
          this.itemInfo.checked = !this.itemInfo.checked
        }
      }
    }
</script>

<style scoped>
  .shop-item{
    display: flex;
    height: 100px;
    /*margin-bottom:20px;*/
    padding-top: 10px;
    border-top: 1px solid #4a4d52;
    margin-bottom: 10px;

  }
  .item-check {
    flex: 1;
    line-height: 100px;
    text-align: center;
  }
  .item-img {
    flex: 2;
  }
  .item-img>img{
    width: 60px;
    border-radius:5px;
  }
  .item-title {
    font-size: 15px;
  }
  .item-desc{
    font-size: 12px;
    line-height: 25px;
  }
  .item-info{

    margin:0 10px;
  }
  .item-info>p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .item-button{
    display: flex;
    line-height: 50px;
  }
  .item-button>p{
    flex: 1;
  }
  .item-price{
    text-align: left;
    color: #06974c;
  }
  .item-count{
    text-align: right;
  }
</style>
