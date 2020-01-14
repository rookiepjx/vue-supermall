<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: "category",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .category-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>
