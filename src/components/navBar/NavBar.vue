<template>
  <div class="nav-bar">
    <div class="left">
      <img @click="$router.push('/home')"  src="../../assets/img/bili.png" alt="">
    </div>
    <div class="center">
      <i class="el-icon-search"></i>
          点击搜索
    </div>
    <div class="right">
      <img @click="$router.push('/login')" v-if="model.user_img == undefined" src="../../assets/img/default.png" alt="">
      <img @click="$router.push('/userinfo')" v-else :src="model.user_img" alt="">
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return{
        model: {}
      }
    },
    methods: {
      selectUser(){
        this.$http.get('/user/'+localStorage.getItem('id'),{
          headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => {
          this.model = res.data[0]
        })
      }
    },
    created() {
      this.selectUser()
    }
  }
</script>

<style lang="less" scoped>

  .nav-bar{
    height: 45px;
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    .center{
      font-size: 12px;
      color: gray;
      flex: 1;
      background-color: #f4f4f4;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        height: 20px;
        margin-left: -85px;
        margin-right: 5px;
        margin-top: 10px;
      }
    }
    .left{
      height: 44px;
      width: 110px;
      img{
        height: 100%;
        width: 80%;
      }
    }
    .right{

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
      p{
        background-color: rgb(233,108,140);
        border-radius: 3px;
        font-size: 13px;
        margin-left: 5px;
        color: white;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>