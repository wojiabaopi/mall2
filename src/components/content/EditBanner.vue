<template>
  <div @click="bannerClick" class="edit-banner">
    <div class="edit-content">
      <span>{{left}}</span>
      <span><slot name="right"></slot></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EditBanner",
    props: ['left'],
    methods: {
      bannerClick(){
        this.$emit('bannerClick')
      }
    }
  }
</script>

<style lang="less" scoped>
  .edit-banner{
    background-color: white;
    font-size: 13px;
    .edit-content{
      padding: 8px 15px;
      border-bottom: 2px solid #fafafa;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
</style>