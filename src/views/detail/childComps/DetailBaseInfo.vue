<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-info">{{goods.newPrice}}</span>
      <span class="o-info">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailBaseInfo",
      props: {
        goods:{
          defaults:{},
          type: Object
        }
      }
    }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    font-size: 15px;
    line-height: 20px;
    margin: 10px 0;
  }
  .info-price{
  }
  .info-price>span {
    margin-left: 7px;
  }
  .n-info{
    color: var(--color-tint);
    font-size: 22px;
  }
  .o-info{
    text-decoration:line-through;
    font-size: 15px;
    margin-top: 9px;
  }
  .discount{
    color: #fafafa;
    position: relative;
    top: -3px;
    background-color: #ff00ae;
  }
  .info-other{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-other>span{
    flex: 1;
    text-align: center;
  }
  .info-service{
    display: flex;
    line-height: 60px;
    justify-content: space-between;
  }
  .info-service-item{
    font-size: 11px;
    flex: 1;
    /*text-align: center;*/
    color: #333;
  }
  .info-service-item>img{
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
  }
</style>
