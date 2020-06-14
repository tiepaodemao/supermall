<template>
  <div>
    <h2>我的</h2>
    <button @click="getProfileMultidata">请求</button>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
    import axios from "axios"
    export default {
      name: "Profile",
      data(){
        return{
          message: null
        }
      },
      methods:{
        getProfileMultidata(){
          axios({
            url:"http://localhost:9999/SuperMall/super/queryUser/ajax/1",
            changeOrigin: true
          }).then(res => {
            console.log(res);
          })
        }
      }
    }
</script>

<style scoped>

</style>
