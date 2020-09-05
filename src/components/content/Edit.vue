<template>
  <div class="edit">
    <nav-bar style="margin-bottom: 15px"></nav-bar>

    <div class="upload">
      <!--      <upload  :after-read="afterRead" class="uploadImg"></upload>-->
      <van-uploader class="uploadImg" :after-read="afterRead" preview-size="100"/>
      <edit-banner left="头像">
        <a slot="right" href="javascript:;">
          <img v-if="!model.user_img" src="../../assets/img/default.png" alt="">
          <img v-else :src="model.user_img" alt="">
        </a>
      </edit-banner>
    </div>

    <edit-banner @bannerClick="show = true" left="昵称">
      <a slot="right" href="javascript:;">{{model.name}}</a>
    </edit-banner>

    <edit-banner left="账号">
      <span slot="right">{{model.username}}</span>
    </edit-banner>

    <edit-banner @bannerClick="show3=true" left="性别">
      <a slot="right" href="javascript:;">
        <span>{{model.gender == 1? '男' : '女'}}</span>
      </a>
    </edit-banner>

    <edit-banner @bannerClick="show2=true" left="个性签名">
      <a href="javascript:;" slot="right">
        <span>{{model.user_desc}}</span>
      </a>
    </edit-banner>

    <div class="back" @click="$router.push('/userinfo')">返回个人中心</div>

    <van-dialog v-model="show" title="请输入昵称" @cancel="text=''" @confirm="confirmClick" show-cancel-button>
      <van-field v-model="text"  autofocus />
    </van-dialog>

    <van-dialog v-model="show2" title="请输入个性签名" @cancel="text=''" @confirm="confirmClick2" show-cancel-button>
      <van-field v-model="text" type="textarea"  autofocus />
    </van-dialog>

    <van-action-sheet
      v-model="show3"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onselect"
    />
  </div>
</template>

<script>
  import NavBar from "../navBar/NavBar";
  import EditBanner from "./EditBanner";

  export default {
    name: "Edit",
    components: {
      NavBar,
      EditBanner,
    },
    data() {
      return {
        model: {},
        show: false,
        text: '',
        show2: false,
        show3: false,
        actions: [{ name: '男' ,val: 1}, { name: '女',val: 0 }],
      }
    },
    methods: {
      selectUser() {
        this.$http.get('/user/' + localStorage.getItem('id'), {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => {
          this.model = res.data[0]
        })
      },
      afterRead(file) {
        const formdata = new FormData()
        formdata.append('file', file.file)
        this.$http.post('/upload', formdata).then(res => {
          this.model.user_img = res.data.url
          this.userUpdate()
        })
      },
      userUpdate() {
        this.$http.post('/update/' + localStorage.getItem('id'), this.model).then(res => {
          if(res.data.code == 200){
            this.$message({
              message: '修改成功',
              type: "success",
              center: true,
              offset: 200
            })
          }
        })
      },
      confirmClick(){
        this.model.name = this.text
        this.userUpdate()
        this.text = ''
      },
      confirmClick2(){
        this.model.user_desc = this.text
        this.userUpdate()
        this.text = ''
      },
      onselect(data){
        this.model.gender = data.val
        this.userUpdate()
      }

    },
    created() {
      this.selectUser()
    }
  }
</script>

<style lang="less" scoped>

  .edit {
    font-size: 13px;
    a {
      text-decoration: none;
      font-size: 13px;
      color: #333;

      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }
    }

    .upload {
      position: relative;
      overflow: hidden;
      .uploadImg {
        position: absolute;
        left: 280px;
        top: 0px;
        opacity: 0;
      }
    }
    .back{
      color: #999;
      background-color: white;
      margin-top: 15px;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
</style>