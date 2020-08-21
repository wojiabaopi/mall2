<template>
  <div class="swiper">
   <div>
     <ul>
       <li @touchstart="clearPlay" @touchend="play" v-for="(item,index) in banners" v-show="mark == index" :key="index">
         <a :href="item.link">
           <img :src="item.image" alt="">
         </a>
       </li>
     </ul>
   </div>
    <div class="bar" >
      <span v-for="(item2,index) in banners" :class="{active: index == mark}"></span>
    </div>
  </div>
</template>

<script>
import {getHomeMultidata} from "../../../network/home";

export default {
name: "Swiper",
  data(){
  return{
    mark: 0,
    banners: [],
    timer: null
  }
  },
  created() {
  this.play()
  getHomeMultidata().then( res => {
    // console.log(res);
    this.banners = res.data.banner.list
  })
  },
  methods: {
    play(){
      this.timer = setInterval(() =>{
        this.mark++
        if(this.mark == this.banners.length){
          this.mark = 0;
        }
      },4000)
    },
    clearPlay(){
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 195px;
  position: relative;
  overflow: hidden;
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
  position: absolute;
}
img{
  width: 100%;
  object-fit: cover;
}
.bar{
  width: 100px;
  position: absolute;
  bottom: 10px;
  margin-left: 138px;
  z-index: 5;
}
.bar span{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid gray;
  display: inline-block;
  margin-right: 10px;
}
.active{
  background-color: red !important;
  box-shadow: 0px 0px 4px yellow;
}
</style>
