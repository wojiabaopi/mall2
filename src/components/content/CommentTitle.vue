<template>
  <div class="comment-title">
    <p>
      <span>评论</span>
      <span class="p2">({{lens}})</span>
    </p>
    <div class="div1">
      <img v-if="userimg" :src="myuser.user_img" alt="">
      <img v-else src="../../assets/img/default.png" alt="">
      <input v-model="input" type="text"  placeholder="说点什么吧">
      <button @click="commentPush">发表</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentTitle",
    props: ['lens'],
    data(){
      return{
        myuser: null,
        userimg: null,
        input: ''
      }
    },
    methods: {
      selectMyuser(){
        this.$http.get('/user/' + localStorage.getItem('id') ).then( res => {
          this.myuser = res.data[0]
          this.userimg = res.data[0].user_img
        })
      },
      commentPush(){
        if(!this.myuser && !localStorage.getItem('id')){
          this.$message({
            message:  "请先登录",
            type: "info",
            center: true,
            offset: 200
          })
          return
        }
        this.$emit('input',this.input)
        this.input = ''
      }
    },
    created() {
      this.selectMyuser()
    }
  }
</script>

<style lang="less" scoped>
  .comment-title{
    margin-left: 5px;
    p{
      .p2{
        margin-left: 10px;
        color: #aaaaaa;
      }
    }
    .div1{
      display: flex;
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
      }
      input{
        outline: none;
        border: 0;
        background-color: #f4f4f4;
        border-radius: 15px;
        font-size: 12px;
        margin-left: 5px;
        padding: 0 10px;
      }
      button{
        outline: none;
        border: 0;
        background-color: #fb7299;
        color: white;
        color: white;
        border-radius: 15px;
        margin-left: 15px;
        padding:0 10px;
      }
    }
  }
</style>