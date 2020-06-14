<template>
  <div class="bottom-bar">
    <div class="checked-content">
      <check-button class="checked-button" :is-check="isCheck" @click.native="ischeckedButton"/>
      <span class="checked-text">全选</span>
    </div>
    <div class="bottom-price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate">
      去计算: {{checkLength}}
    </div>
  </div>
</template>

<script>
    import CheckButton from './CheckButton'
    import {mapGetters} from 'vuex'
    export default {
      name: "CartBottomBar",
      data(){
        return{
          isCheck: false
        }
      },
      components: {
        CheckButton
      },
      props: {

      },
      computed: {
        ...mapGetters(['checkLength']),
        totalPrice(){
          return '￥' + this.$store.state.CartList.filter(item => {
            return item.checked
          }).reduce((preValue , item) => {
            return preValue + (parseInt(item.price) * parseInt(item.count))
          },0).toFixed(2)
        },
      },
      methods: {
        ischeckedButton(){
          if (!this.isCheck) {
            this.$store.commit('listcheckedAll')
          }else {
            this.$store.commit('listuncheckedAll')
          }

          this.isCheck = !this.isCheck
        }
      }
    }
</script>

<style scoped>
  .bottom-bar {
    background-color: #ecf2ee;
    height: 40px;
    position: relative;
    display: flex;
    /*line-height: 30px;*/
  }
  .checked-content{
    display: flex;
    align-items: center;
  }
  .checked-button{
    width: 20px;
    height: 20px;
  }
  .checked-text {
    line-height: 40px;
  }
  .bottom-price{
    line-height: 40px;
    margin-left: 20px;
  }
  .calculate{
    width: 80px;
    text-align: center;
    background-color: #40cc42;
    position: absolute;
    right: 0;
    line-height: 40px;
  }
</style>
