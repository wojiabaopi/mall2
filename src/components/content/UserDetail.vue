<template>
  <div class="user-detail">
    <div class="content">
      <div class="head_img">
        <img v-if="userInfo.user_img"  :src="userInfo.user_img" alt="">
        <img v-else  src="../../assets/img/default.png" alt="">
      </div>
      <div class="user-text">
        <div class="text">
          <p>
            <span>0</span>
            <span class="text_color">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="text_color">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="text_color">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')" class="text2" >
          <p>编辑资料</p>
        </div>
      </div>
    </div>
    <div class="content2">
     <p>{{userInfo.name}}
       <i v-if="userInfo.gender == 0" class="el-icon-male"></i>
       <i v-else class="el-icon-female"></i>
     </p>

    </div>
    <div>
      <p v-if="userInfo.user_desc" style="margin-top: -15px; color: #aaa;font-size: 13px">{{userInfo.user_desc}}</p>
      <p v-else style="margin-top: -15px; color: #aaa;font-size: 13px">这个人很神秘，什么都没有写</p>
    </div>
    <div class="content3">
      <p>动态</p>
      <p>视频</p>
    </div>

    <div class="content4" @click="$router.push('/home')">
      <p>进入首页</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "UserDetail",
    props: ['userInfo']
  }
</script>

<style lang="less" scoped>

  .user-detail{
    background-color: #ffffff;
    padding-left: 12px;
    .content{
      display: flex;
      .head_img{
        img{
          width: 60px;
          height: 60px;
          border-radius: 30px;
          margin-top: 15px;
          margin-left: 10px;
        }
      }
     .user-text{
       margin: 0 40px;
       .text{
         display: flex;
         justify-content: center;
         align-items: center;
         p{
           margin: 5px 10px;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           border-right: 1px solid #aaa;
           font-size: 13px;
           text-align: center;
           width: 60px;
           .text_color{
             color: #aaa;
           }
           span{
             flex: 1;
           }
         }
       }
       .text2{
         color: #aaa;
         font-size: 14px;
         text-align: center;
         p{
           border: 1px solid #aaa;
           width: 170px;
           height: 30px;
           line-height: 30px;
           border-radius: 8px;
           margin-left: 40px;
         }
       }
     }
    }
    .content2{
      display: flex;
      p{
        font-size: 20px;
        margin-top: 0px;
        width: 300px;
        i{
          font-size: 20px;
          color: #aaaaaa;
          margin-top: 5px;
        }
      }


    }
    .content3{
      display: flex;
      margin-left: -12px;
      border-top: 4px solid #f4f4f4;
      border-bottom: 4px solid #f4f4f4;
      p{
        margin-left: 12px;
        font-size: 14px;
      }
    }
    .content4{
      margin-top: 20px;
      width: 250px;
      border: 3px solid #f4f4f4 ;
      margin-left: 50px;
      background-color: #aaaaaa;
      border-radius: 30px 30px;
      text-align: center;
      p{
        color: white;
        font-size: 15px;
      }
    }
  }
</style>