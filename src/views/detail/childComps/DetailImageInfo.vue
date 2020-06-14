<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="image-Info">
    <div class="info-desc">
      <div class="start">↑------------</div>
      <div class="desc">
        {{detailInfo.desc}}
      </div>
      <div class="end">------------↓</div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
        <img v-for="item in detailInfo.detailImage[0].list" :src="item" @load="imageLoad">
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailImageInfo",
      props: {
        detailInfo:{
          type:Object,
          default:{}
        }
      },
      methods: {
        imageLoad(){
          this.$emit("imageLoad");
        }
      }
    }
</script>

<style scoped>
  .info-desc {
    margin: 10px 0;
  }
  .image-Info {
    border-top: 8px solid #e8eeea;
    border-bottom: 8px solid #e8eeea;
  }
  .start {
    text-align: left;
  }
  .end {
    text-align: right;
  }
  .info-key {
    font-size: 18px;
  }
  .info-list>img {
    width: 100%;
  }
</style>
