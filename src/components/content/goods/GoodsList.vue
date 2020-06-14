<template>
  <div class="goods">
    <goods-list-item v-for="(item,key) in goods" :goodsItem="item" :key="key" class="goods-list-item"/>
  </div>
</template>

<script>
    import GoodsListItem from 'components/content/goods/GoodsListItem'
    export default {
      name: "GoodsList",
      props: {
        goods: {
          type:Array,
          default(){
            return []
          }
        }
      },
      components:{
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    /*justify-content: space-around;*/
    /*padding: 2px;*/

  }
  .goods-list-item{
    text-align: center;
  }
</style>
