<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img">
    <div class="item-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default() {
          return {}
        }

      }
    }
  }
</script>

<style scoped>
  .goods-item{
    position: relative;
    padding-bottom: 40px;
    max-width:48%;
    font-size: 12px;
  }
  .goods-item img{
    border-radius: 15px;
    max-width: 100%;
  }
  .item-info{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .price::before{
    content: '￥';
  }
  .collect{
    position: relative;
  }
  .collect::before{
    content: '';
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
