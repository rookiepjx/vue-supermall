<template>
  <div id="app">
    <router-view/>
    <mainTabbar class="mainTabBar"></mainTabbar>
  </div>
</template>
<script>
  import mainTabbar from "components/content/mainTabbar/mianTabbar";
  export default {
    name:'app',
    components: {
      mainTabbar,
    },
    component:{

    }
  }
</script>

<style>
  @import 'assets/css/base.css';

</style>
