<template>
  <div v-if="model != null" class="article">
    <nav-bar></nav-bar>
    <div class="video-warpper">
      <div class="video">
        <video controls :src="model.content"></video>
      </div>
      <div class="span1">
        <span>{{model.category.title}}</span>
        <span>{{model.name}}</span>

      </div>
      <div class="span2">
        <span>{{model.userinfo.name}}</span>
        <span>132.4万观看</span>
        <span>132弹幕</span>
        <span>{{model.date}}</span>
      </div>
      <div class="span3">
        <div @click="change" >
          <span v-if="active == true" ><i class="el-icon-star-on"></i>收藏</span>
          <span v-else><i class="el-icon-star-off"></i>收藏</span>
        </div>
        <div>
          <span><van-icon name="send-gift" />缓存</span>
          <span><van-icon name="share" />分享</span>
        </div>
      </div>
    </div>
    <div class="commend">
      <detail class="commend-item" v-for="(item,index) in commend" :key="index"  :detailitem="item"></detail>
    </div>
    <div>
      <comment-title @input="inputSuccess" :lens="lens"></comment-title>
    </div>
    <div>
      <comment ref="commentPulish" @length=" res => lens = res"></comment>
    </div>
  </div>
</template>

<script>
  import NavBar from "../navBar/NavBar";
  import Detail from "./Detail";
  import Comment from "./Comment";
  import CommentTitle from "./CommentTitle";
  export default {
    name: "Article",
    data(){
      return{
        model: null,
        active: false,
        commend: null,
        lens: null,
        post: {
          comment_content: '',
          comment_date: '',
          parent_id: null,
          article_id: null
        }
      }
    },
    components: {
      NavBar,
      Detail,
      CommentTitle,
      Comment
    },
    methods:{
      selectArticle(){
        this.$http.get('/article/'+ this.$route.params.id).then(res =>{
          this.model = res.data[0]
        })
      },
      change(){
         this.active = !this.active
      },
      selectCommend(){
        this.$http.get('/commend').then( res => {
          this.commend = res.data
        })
      },
      inputSuccess(input){
        const date = new Date()
        let m = date.getMonth() + 1
        let d = date.getDate()
        if(m < 10){
          m = '0' + m
        }
        if(d < 10){
          d = '0' + d
        }
        const str = `${m}-${d}`
        this.post.comment_date = str
        this.post.comment_content= input
        this.post.article_id = this.$route.params.id
        this.$http.post('/comment_post/' + localStorage.getItem('id'),this.post)
        this.$refs.commentPulish.selectComment()
      }
    },
    created() {
      this.selectArticle()
      this.selectCommend()
    },
    watch: {
      $route(){
        this.selectArticle()
        this.selectCommend()
      }
    }
  }
</script>

<style lang="less" scoped>

  .video-warpper{
    width: 100%;
    .video{
      width: 100%;
      video{
        width: 100%;
      }
    }
  }
  .article{
    background-color: #ffffff;
    .span1{
      margin: 8px 10px;
      span{
        margin: 2px 10px;
        font-size: 14px;
        color: #666666;
      }
    }
    .span2{
      margin: 8px 15px;
      span{
        margin: 2px 5px;
        color: #aaaaaa;
        font-size: 12px;
      }
      span:nth-child(1){
        font-size: 14px;
        color: black;
      }

    }
    .span3{
      font-size: 12px;
      display: flex;
      margin: 8px 10px;
      span{
        color: #666666;
        margin: 2px 2px;
        padding-left: 4px;
        i{
          font-size: 18px;
          margin-left: 4px;
        }
      }
    }

  }
  .title{
    color: #757575;
    background-color: #f1f1f1;
  }

  .commend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .commend-item{
      width: 45%;
      margin: 5px 0;
    }
  }

</style>