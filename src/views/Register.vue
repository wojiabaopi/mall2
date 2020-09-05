<template>
  <div class="register">
    <login-top middle="注册bilibli">
      <div slot="right" style="font-size: 13px" @click="$router.push('/login')">切换到登录页面</div>
    </login-top>
    <div class="input">
      昵称<login-text @inputChange="success1" rule="^.{6,16}$" placeholder="请输入昵称"></login-text>
    </div>
    <div class="input2">
      账号<login-text @inputChange="success2" rule="^.{6,16}$" placeholder="请输入账号"></login-text>
    </div>
    <div class="input2">
      密码<login-password @inputChange="success3" rule="^.{6,16}$"></login-password>
    </div>
    <div  class="login-btn">
      <login-btn @registerSubmit="registerSubmit" class="btn" content="注册"></login-btn>
    </div>
  </div>
</template>

<script>
  import LoginTop from "../components/common/LoginTop";
  import LoginText from "../components/common/LoginText";
  import LoginPassword from "../components/common/LoginPassword";
  import LoginBtn from "../components/common/LoginBtn";
  export default {
    name: "Register",
    components: {
      LoginTop,
      LoginText,
      LoginPassword,
      LoginBtn
    },
    data(){
      return{
        input: '',
        model: {
          name: '',
          username: '',
          password: ''
        }
      }
    },
    methods: {
      success1(content){
        this.model.name = content
      },
      success2(content){
        this.model.username = content
      },
      success3(content){
        this.model.password = content
      },
       registerSubmit(){
        const rules = /^.{6,16}$/
        if( rules.test(this.model.name) && rules.test(this.model.username)  && rules.test(this.model.password) ){
          this.$http.post('/register', this.model).then( res => {
            this.$message({
              message: res.data.msg+ '，请点击切换到登录界面',
              type: "info",
              center: true,
              offset: 200
            })
            localStorage.setItem('token',res.data.objtoken)
            localStorage.setItem('id',res.data.id)
          })

        }else {
          this.$message({
            message: '格式错误，请重新输入',
            type: "error",
            offset: 220,
            center: true
          })
        }
      }

    }
  }
</script>

<style scoped>
  .input{
    height: 60px;
    background-color: #ffffff;
    margin: 10px 0;
    line-height: 60px;
    padding-left: 10px;
  }
  .input2{
    height: 60px;
    background-color: #ffffff;
    line-height: 60px;
    padding-left: 10px;
  }
  .login-btn{
    margin-top: 10px;
    text-align: center;
  }
  .btn{
    margin: 15px auto;
  }
</style>