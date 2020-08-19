<template>

  <div class="tab-bar-item" @click="itemClick">
    <!--    <img src="../../assets/img/tabbar/home1.png" alt="">-->
    <!--    <div>首页</div>-->
    <div v-if="!isActive">
      <slot name="slot-img"></slot>
    </div>
    <div v-else>
      <slot name="slot-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>
  </div>
  <!--  <div class="tab-bar-item">-->
  <!--    <img src="../../assets/img/tabbar/sort1.png" alt="">-->
  <!--    <div>分类</div>-->
  <!--  </div>-->
  <!--  <div class="tab-bar-item">-->
  <!--    <img src="../../assets/img/tabbar/sh-cart1.png" alt="">-->
  <!--    <div>购物车</div>-->
  <!--  </div>-->
  <!--  <div class="tab-bar-item">-->
  <!--    <img src="../../assets/img/tabbar/mine1.png" alt="">-->
  <!--    <div>我的</div>-->
  <!--  </div>-->


</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>


.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>