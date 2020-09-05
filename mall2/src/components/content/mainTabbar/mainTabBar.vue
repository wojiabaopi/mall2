<template>
 <div>
   <tab-bar>
     <tab-bar-item path="/home">
       <img slot="slot-img" src="../../../assets/img/tabbar/home1.png" alt="">
       <img slot="slot-img-active" src="../../../assets/img/tabbar/home2.png" alt="">
       <div slot="slot-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/sort" active-color="blue">
       <img slot="slot-img" src="../../../assets/img/tabbar/sort1.png" alt="">
       <img slot="slot-img-active" src="../../../assets/img/tabbar/sort2.png" alt="">
       <div slot="slot-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/shopcart" active-color="blue">
       <img slot="slot-img" src="../../../assets/img/tabbar/sh-cart1.png" alt="">
       <img slot="slot-img-active" src="../../../assets/img/tabbar/sh-cart2.png" alt="">
       <div slot="slot-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile">
       <img slot="slot-img" src="../../../assets/img/tabbar/mine1.png" alt="">
       <img slot="slot-img-active" src="../../../assets/img/tabbar/mine2.png" alt="">
       <div slot="slot-text">我的</div>
     </tab-bar-item>

   </tab-bar>
 </div>
</template>

<script>
import TabBarItem from '../../common/tabbar/TabBarItem'
import TabBar from '../../common/tabbar/Tabbar'
export default {
name: "mainTabBar",
  components: {
  TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>
