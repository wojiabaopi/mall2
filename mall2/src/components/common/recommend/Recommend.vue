<template>
 <div class="recommend">
   <div class="fle1" v-for="item in recommends">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div class="font">{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
import {getHomeMultidata} from "../../../network/home";

export default {
  name: "Recommend",
  data() {
    return{
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then( res => {
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.recommend{
  width: 100%;
  height: 120px;
  display: flex;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.fle1{
  margin-top: 15px;
  flex: 1;
}
a{
  text-decoration: none;
  color: black;
}
img{
  width: 70px;
  height: 70px;
}
.font{
  font-size: 12px;
}
</style>
