<template>
  <el-input style="width: 270px;margin-left: 20px"
            :placeholder="placeholder"
            v-model="input"
            clearable
            :rule="rule">
  </el-input>
</template>

<script>
  export default {
    name: "LoginText",
    data() {
      return {
        input: ''
      }
    },
    methods: {
      handlerule(){
        const rue = new RegExp(this.rule)
        if(rue.test(this.input)){
          this.$emit('inputChange',this.input)
        }
      }
    },
    props: ['placeholder','rule'],
    watch:{
      input(){
        this.handlerule()
      }
    }
  }
</script>

<style scoped>

</style>