<template>
  <div class="NavBar">
    <div class="back sides" @click="back">
      <img src="~assets/images/common/back.svg">
    </div>
    <div @click="itemClick(key)" :class="{active: currentIndex===key }" class="center" v-for="(item,key) in titles">{{item}}</div>
    <div class="sides"></div>
  </div>
</template>

<script>
    export default {
      name: "DetailNavBar",
      data(){
        return{
          titles: ['商品','评论','详情','推荐'],
          currentIndex: 0,
          iid: null,
          res: null
        }
      },
      methods: {
        itemClick(index){
          console.log(index);
          this.currentIndex = index
          this.$emit("titleClick",this.currentIndex)
        },
        back(){
          this.$router.back()
        }
      },
    }
</script>

<style scoped>
  .back{
    padding: 8px 0px 0px 12px;

  }
  .NavBar{
    display: flex;
    height: 40px;
    background-color: #fafafa;
    width: 100%;
  }
  .center{
    flex: 1;
    text-align: center;
    font-size: 13px;
    line-height: 40px;
  }
  .sides{
    flex: 2;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
