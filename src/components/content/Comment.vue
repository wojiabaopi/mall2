<template>
  <div class="comment">
    <div class="div1" v-for="(item,index) in comment" :key="index">
      <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" alt="">
      <img v-else src="../../assets/img/default.png" alt="">
      <span v-if="item.userinfo.name">{{item.userinfo.name}}</span>
      <span v-else>匿名用户</span>
      <div>
        <span class="span2 span_name">{{item.comment_date}}</span>
      </div>
      <p>{{item.comment_content}}</p>

      <div v-for="(item1,index1) in item.child" :key="index1" class="div2">
        <img v-if="item1.userinfo.user_img" :src="item1.userinfo.user_img" alt="">
        <img v-else src="../../assets/img/default.png" alt="">

          <span v-if="item1.userinfo.name">{{item1.userinfo.name}}</span>
          <span v-else>匿名用户</span>
          <div>
            <span class="span3 span_name">{{item1.comment_date}}</span>
          </div>
        <p>{{item1.comment_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    data() {
      return {
        comment: null
      }
    },
    methods: {
      selectComment() {
        this.$http.get('/comment/' + this.$route.params.id).then(res => {
          if(res.data){
            this.$emit('length',res.data.length)
          }
          this.comment = this.changeComment(res.data)
        })
      },
      changeComment(data) {
        function fn(temp) {
          let arr1 = []
          for (var i = 0; i < data.length; i++) {
            if (data[i].parent_id == temp) {
              arr1.push(data[i])
              data[i].child = fn(data[i].comment_id)
            }
          }
          return arr1
        }

        return fn(null)
      }
    },
    created() {
      this.selectComment()
    }
  }
</script>

<style lang="less" scoped>

  .comment {
    width: 100%;
    margin-left: 10px;
    margin-top: 20px;

    .div1 {

      font-size: 12px;

      img {
        width: 25px;
        height: 25px;
        border-radius: 12.5px;
      }

      span {
        margin-left: 10px;
        font-size: 16px;
      }

      p {
        padding-left: 40px;
        margin-top: -5px;
        font-size: 15px;
        color: #999999;
      }

      .div2 {
        margin-left: 40px;
        font-size: 12px;

        img {
          width: 25px;
          height: 25px;
          border-radius: 12px;
        }
        span {
          margin-left: 10px;
          font-size: 14px;
        }

        p {
          padding-left: 40px;
          margin-top: -6px;
          font-size: 13px;
          color: #aaaaaa;
        }
      }
    }

  }

  .span2 {
    position: relative;
    left: 220px;
    top: -15px;
    font-size: 16px;
  }

  .span3 {
    position: relative;
    left: 230px;
    top: -20px;
  }
  .span_name{
    color: #999999;
  }
</style>