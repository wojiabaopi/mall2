<template>
  <div class="login-top">
    <div class="left"></div>
    <div class="center">{{middle}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginTop",
    props: ['middle']
  }
</script>

<style scoped>
.login-top{
  height: 44px;
  background-color: #ffffff;
  display: flex;
  text-align: center;
}
.left,.right,.center{
  flex: 1;
  line-height: 44px;
}

</style>