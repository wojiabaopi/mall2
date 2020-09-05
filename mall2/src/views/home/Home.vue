<template>
 <div id="home">
   <nav-bar class="home-center" >
     <div  slot="center">购物街</div>
   </nav-bar>
   <swiper></swiper>
   <recommend></recommend>
   <feature></feature>
   <tab-control :titles="['流行','新款','精选']"></tab-control>
   <ul>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
     <li>lll</li>
   </ul>
 </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Swiper from "../../components/common/swiper/Swiper";
import Recommend from "../../components/common/recommend/Recommend";
import TabControl from "../../components/content/tabControl/TabControl";
import Feature from "./child/Feature";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Recommend,
    Feature,
    TabControl
  },
  data(){
    return{
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
.home-center{
  color: #ffffff;
  background-color: #ff8198;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}

</style>
