<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainTabBar from "./components/content/mainTabbar/mainTabBar";
export default {
  name: 'App',
  components: {
    mainTabBar,
  }
}
</script>

<style>

</style>
