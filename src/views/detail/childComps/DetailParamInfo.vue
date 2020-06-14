<template>
  <div class="param-info" v-if="Object.keys(detailParams).length !==0 ">
    <table class="param-info-rule">
      <tr v-for="index in detailParams.rule.tables[0]">
        <td v-for="indey in index">{{indey}}</td>
      </tr>
    </table>
    <table class="param-info-info">
      <tr v-for="index in detailParams.info.set">
        <td v-for="indez in index">{{indez}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
      name: "DetailParamInfo",
      props: {
        detailParams:{
          type:Object,
          default:{},
        }
      }
    }
</script>

<style scoped>
  .param-info >table{
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    line-height: 40px;
  }
  .param-info-rule{
    text-align: center;
    border-bottom: 2px solid #dbdbdb;
  }
  .param-info-info{
    text-align: left;
  }
  .param-info-info>tr>td:nth-child(1){
    width: 20%;
    text-align: center;
  }
  .param-info-info>tr>td:nth-child(2){
    color: #19ac41;
  }
  .param-info>table>tr>td{
    border-bottom:1px solid #dbdbdb;
  }
</style>
