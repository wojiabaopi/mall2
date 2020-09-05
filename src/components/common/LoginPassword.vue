<template>
  <el-input :rule="rule" style="width: 270px; margin-left: 20px" placeholder="请输入密码" v-model="input" show-password></el-input>
</template>

<script>
  export default {
    name: "LoginPassword",
    data(){
      return{
        input: '',
      }
    },
    props: ['rule'],
    methods: {
      handlerule(){
        const rue = new RegExp(this.rule)
        if(rue.test(this.input)){
          this.$emit('inputChange',this.input)
        }
      }
    },
    watch: {
      input(){
        this.handlerule()
      }
    }
  }
</script>

<style scoped>

</style>