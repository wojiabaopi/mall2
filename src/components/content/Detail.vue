<template>
  <div class="detail" @click="pathPush">
    <div class="img-detail">
      <img :src="detailitem.img" style="width: 100%;height: 100%" alt="">
        <span class="video"><i class="el-icon-video-play"></i>1255</span>
        <span v-if="detailitem.commentlen == null" class="comment"><i class="el-icon-postcard"></i>25</span>
        <span v-else class="comment"><i class="el-icon-postcard"></i>{{detailitem.commentlen}} </span>
    </div>
    <p>{{detailitem.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    methods: {
      pathPush(){
        if(this.$route.path != ('/article/' + this.detailitem.id + '')){
          this.$router.push('/article/' + this.detailitem.id + '')
        }

      }
    },
    props: ['detailitem']
  }
</script>

<style lang="less" scoped>

  .detail{
    p{
      font-size: 12px;
      margin: 0;

    }
    .img-detail{
      position: relative;
        .video{
          position: absolute;
          width: 80%;
          background: linear-gradient(0deg,rgba(0,0,0,0.85),transparent);
          left: 0px;
          bottom: 5px;
          font-size: 14px;
          color: white;
          opacity: 0.8;
          i{
            padding-right: 5px;
          }
        }
        .comment{
          position: absolute;
          width: 20%;
          background: linear-gradient(0deg,rgba(0,0,0,0.85),transparent);
          right: 5px;
          bottom: 5px;
          font-size: 14px;
          color: white;
          opacity: 0.8;
          i{
            padding-right: 5px;
          }
        }

    }
  }
</style>