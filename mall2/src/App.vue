<template>
  <div id="app">
    <main-tabbar></main-tabbar>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar,
  }
}
</script>

<style>

</style>
