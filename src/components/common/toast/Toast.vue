<template>
  <div class="toast" v-show="show">
      {{message}}
  </div>
</template>

<script>
    export default {
      name: "Toast",
      props:{
        message:{
          type: String,
          default:null
        },
        show: {
          type: Boolean,
          default: false
        }

      },

    }
</script>

<style scoped>
  .toast {
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 50%;
    border-radius:5px;
    height: 35px;
    /*width: 70px;*/
    padding: 10px;
    /*margin-left: -35px;*/
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.5);
    font-size: 15px;
    color: white;
  }
</style>
