<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: var(--color-tint);
    color: rgb(12, 121, 34);
    box-shadow: 0 1px 1px rgba(100,100,100,0.6);
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    font-size: 20px;
  }
</style>
