<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !==0">
    <div class="info-header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt=""/>
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <div>{{commentInfo.content}}</div>
      <div class="info-imgs">
        <img v-for="item in commentInfo.images" :src="item">
      </div>
      <div class="info-other">
        <span>{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    import {formatDate} from "../../../common/utils";

    export default {
      name: "DetailCommentInfo",
      props: {
        commentInfo: {
          type:Object,
          default:{}
        }
      },
      filters: {
        showDate: function (value) {
          let date = new Date(value*1000);
          return formatDate(date,'yyyy-MM-dd')
        }
      }
    }
</script>

<style scoped>
  .comment-info {
    border-top: 7px solid #e8eeea;
    margin-top: 20px;
    padding: 0 10px;
  }
  .info-header{
    font-size: 16px;
    line-height: 50px;
    padding: 0 10px;
  }
  .info-header>span:nth-child(2){
    float: right;
  }
  .info-user {
    border-top: 3px solid #e8eeea;
    padding: 20px 0;
  }
  .info-user>img{
    height: 50px;
    width: 50px;
    vertical-align: middle;
  }
  .info-user>span{
    font-size: 18px;
    margin-left: 20px;
  }
  .info-detail{
    line-height: 20px;
    font-size: 12px;
  }
  .info-other>span:nth-child(2){
    margin-left: 20px;
  }
  .info-imgs {
    height: 120px;
  }
  .info-imgs img{
    width: 100px;
    height: 100px;
  }
</style>
