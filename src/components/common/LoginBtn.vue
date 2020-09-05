<template>
  <el-row>
    <el-button type="info" round @click="btnClick" class="btn1">{{content}}</el-button>
  </el-row>
</template>

<script>
  export default {
    name: "LoginBtn",
    props: ['content'],
    methods: {
      btnClick(){
        this.$emit('registerSubmit')
      }
    }
  }
</script>

<style>
.btn1{
  width: 300px;
  height: 40px;
}

</style>