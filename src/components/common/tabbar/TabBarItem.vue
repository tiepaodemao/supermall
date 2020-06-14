<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path: String,
          color:{
            type: String,
            default: '#b10000'
    //
          },
          activeStyle:{
            type:String,
            default: '#0043ab'
    //
          }
        },
        data(){
          return{
          //   isActive: false
          }
        },
        computed: {
          isActive(){
           return this.$route.path.indexOf(this.path) === -1
          },
          isActiveStyle(){
           return this.isActive ? {color: this.color} : {color: this.activeStyle}
          }
        },
        methods:{
          itemClick(){
            this.$router.replace(this.path);
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 15px;
    height: 49px;
    background-color: #ddfcea;
    /*rgb(22, 108, 54)*/
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }
</style>
