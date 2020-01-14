<template>
  <div @click="itemClick" class="tab-bar-item">
<!--    应该使用具名插槽slot动态改变TabBarItem内容-->
<!--    <img src="../../assets/img/Home.svg" alt="Home">-->
<!--    <div>首页</div>-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //属性，传递TabBarItem的path参数,类型为String
    //activeColor如果没指定为default,可以在TabBar-item绑定属性
    props:{
      path: String,
      activeColor:{
        type:String,
        default: '#d81e06'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {'color':this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        console.log('itemClick');
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    /*vertical-align: middle;图标底部空白去掉*/
    vertical-align: middle;
  }

</style>
