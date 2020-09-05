<template>
  <div id="app">
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components:{
    }
  }
</script>


<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
</style>
