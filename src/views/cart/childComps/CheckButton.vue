<template>
    <div>
      <img src="~assets/images/cart/unchecked.png" :class="{imgCheck : isCheck}"/>
    </div>
</template>

<script>
    export default {
      name: "CheckButton",
      props: {
        isCheck: {
          type: Boolean,
          default(){
            return false
          }
        }
      },
    }
</script>

<style scoped>
  img{
    width: 20px;
    height: 20px;
  }
  .imgCheck{
    content:url('~assets/images/cart/checked.png');
  }
</style>
