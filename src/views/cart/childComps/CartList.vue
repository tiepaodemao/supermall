<template>
    <div class="cart-list">
      <div v-for="item in cartList">
        <cart-list-item :item-info="item"/>
      </div>
        <div>
          <p>内容1</p>
          <p>内容2</p>
          <p>内容3</p>
          <p>内容4</p>
          <p>内容5</p>
          <p>内容6</p>
          <p>内容7</p>
          <p>内容8</p>
          <p>内容9</p>
          <p>内容10</p>
          <p>内容11</p>
          <p>内容12</p>
          <p>内容13</p>
          <p>内容14</p>
          <p>内容15</p>
          <p>内容16</p>
          <p>内容17</p>
          <p>内容18</p>
          <p>内容19</p>
          <p>内容20</p>
          <p>内容21</p>
          <p>内容22</p>
          <p>内容23</p>
          <p>内容24</p>
          <p>内容25</p>
          <p>内容26</p>
          <p>内容27</p>
          <p>内容28</p>
          <p>内容29</p>
          <p>内容30</p>
          <p>内容31</p>
          <p>内容32</p>
          <p>内容33</p>
          <p>内容34</p>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from './CartListItem'
  import CheckButton from "./CheckButton";
    export default {
      name: "CartList",
      components: {
        CheckButton,
        Scroll,
        CartListItem
      },
      computed: {
        ...mapGetters(['cartList'])
      },

    }
</script>

<style scoped>
  /*.cart-list {*/
  /*  height: 100%;*/
  /*}*/
  /*.content {*/
  /*  height: calc(100% - 44px - 49px);*/
  /*  overflow: hidden;*/
  /*}*/
</style>
