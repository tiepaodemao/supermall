<template>
  <div id="tabControl">
    <div v-for="(item,index) in title" :class="{active: currentIndex===index}" @click="itemClick(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabControl",
      props: {
         title:{
           type: Array
         }
      },
      data(){
        return{
          currentIndex : 0
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
        }
      }
    }
</script>

<style scoped>
  #tabControl {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: white;
  }
  #tabControl>div {
    flex: 1;
  }
  .active {
    color: var(--color-tint);

  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
    padding:5px;
  }
</style>
