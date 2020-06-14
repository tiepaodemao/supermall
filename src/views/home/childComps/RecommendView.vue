<template>
  <div id="recommendView">
    <div v-for="item in recommends" >
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RecommendView",
      props: {
        recommends: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>
  #recommendView{
    display: flex;
    padding: 20px 0 30px 0;
    border-bottom: 10px solid rgba(80, 82, 86, 0.11);
  }
  #recommendView img{
    width: 75px;
    height: 75px;
  }
  #recommendView>div{
    flex: 1;
    text-align: center;
  }
</style>
