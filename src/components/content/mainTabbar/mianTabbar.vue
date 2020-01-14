<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
<!--        使用具名插槽-->
        <img slot="item-icon" src="~assets/img/tabbar/Home.svg" alt="Home">
        <img slot="item-icon-active" src="~assets/img/tabbar/Home_active.svg" alt="Home">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/Category.svg" alt="Category">
        <img slot="item-icon-active" src="~assets/img/tabbar/Category_active.svg" alt="Category">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcar">
        <img slot="item-icon" src="~assets/img/tabbar/ShoppingCar.svg" alt="ShoppingCar">
        <img slot="item-icon-active" src="~assets/img/tabbar/ShoppingCar_active.svg" alt="ShoppingCar">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img slot="item-icon" src="~assets/img/tabbar/Me.svg" alt="Me">
        <img slot="item-icon-active" src="~assets/img/tabbar/Me_active.svg" alt="Me">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from 'components/common/tabBar/TabBar'
  import TabBarItem from 'components/common/tabBar/TabBarItem'

  export default {
    name: "mainTabbar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "../../../assets/css/base.css";


</style>
