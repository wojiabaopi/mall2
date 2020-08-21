<template>
  <div class="tab-control">
    <div @click="itemClick(index)" v-for="(item,index) in titles" :class="{active: index == mark}" class="item-control">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        mark: 0
      }
    },
    methods: {
      itemClick(index){
        this.mark = index
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  position: sticky;
  top: 44px;
  background-color: #ffffff;
}
  .item-control{
    flex: 1;
    height: 40px;

  }
  .item-control span {
    padding: 4px;
    line-height: 40px;
  }
  .active{
    color: #ff5777;
  }
  .active span{
    border-bottom: 2px solid #ff5777;
  }
</style>
