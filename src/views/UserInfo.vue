<template>
  <div class="user-info">
    <nav-bar></nav-bar>
    <img class="backImg" src="../assets/img/backImg.jpg" alt="">
    <user-detail :userInfo="model"></user-detail>
  </div>
</template>

<script>
  import NavBar from "../components/navBar/NavBar";
  import UserDetail from "../components/content/UserDetail";
  export default {
    name: "UserInfo",
    components: {
      NavBar,
      UserDetail
    },
    data(){
      return{
        model: {}
      }
    },
    methods: {
      userInfoData(){
        this.$http.get('/user/'+localStorage.getItem('id'),{
          headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => {
          this.model = res.data[0]
        })
     }
    },
    mounted() {
      this.userInfoData()
    },
    watch: {
      model(){
        this.userInfoData()
      }
    }
  }
</script>

<style lang="less" scoped>

  .backImg{
    height: 100px;
    width: 100%;
    opacity: 0.2;
  }

</style>