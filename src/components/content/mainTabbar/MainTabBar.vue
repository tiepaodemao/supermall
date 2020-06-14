<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" color="#00FF64" active-style="#FF000F">
        <img slot="item-icon" src="~assets/images/tabbar/filter.png">
        <img slot="item-icon-active" src="~assets/images/tabbar/filter_active.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" color="#00FF64" active-style="#FF000F">
        <img slot="item-icon" src="~assets/images/tabbar/list.png">
        <img slot="item-icon-active" src="~assets/images/tabbar/list_active.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" color="#00FF64" active-style="#FF000F">
        <img slot="item-icon" src="~assets/images/tabbar/cart_empty.png">
        <img slot="item-icon-active" src="~assets/images/tabbar/cart_empty_active.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" color="#00FF64" active-style="#FF000F">
        <img slot="item-icon" src="~assets/images/tabbar/user.png">
        <img slot="item-icon-active" src="~assets/images/tabbar/user_active.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
      name: "MainTabBar",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
