<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车{{cartLength}}</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CartList from "./childComps/CartList";
    import Scroll from "components/common/scroll/Scroll";
    import CartBottomBar from "./childComps/CartBottomBar";

    import {mapGetters} from 'vuex'


    export default {
      name: "Cart",
      components: {CartBottomBar, CartList, NavBar,Scroll},
      computed: {
        ...mapGetters(['cartLength'])
      },
      activated() {
        this.$refs.scroll.refresh()
      }
    }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 44px);
    overflow: hidden;
  }
  .bottom-bar {
    position: fixed;
    bottom: 44px;
    right: 0px;
    left: 0px;
  }
</style>
