<template>
  <div class="register">
    <login-top middle="登录bilibli">
      <div slot="right" style="font-size: 13px" @click="$router.push('/register')">切换到注册页面</div>
    </login-top>
    <div class="input2 input">
      账号<login-text @inputChange="success2" rule="^.{6,16}$" placeholder="请输入账号"></login-text>
    </div>
    <div class="input2 ">
      密码<login-password @inputChange="success3" rule="^.{6,16}$"></login-password>
    </div>
    <div  class="login-btn">
      <login-btn @registerSubmit="registerSubmit" class="btn" content="登录"></login-btn>
    </div>
  </div>
</template>

<script>
  import LoginTop from "../components/common/LoginTop";
  import LoginText from "../components/common/LoginText";
  import LoginPassword from "../components/common/LoginPassword";
  import LoginBtn from "../components/common/LoginBtn";
  export default {
    name: "Login",
    components: {
      LoginTop,
      LoginText,
      LoginPassword,
      LoginBtn
    },
    data(){
      return{
        res1: '',
        input: '',
        model: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      success2(content){
        this.model.username = content
      },
      success3(content){
        this.model.password = content
      },
      registerSubmit(){
        const rules = /^.{6,16}$/
        if( rules.test(this.model.username)  && rules.test(this.model.password) ){
          this.$http.post('/login', this.model).then( res => {
            this.res1 = res.data.msg;
            this.$message({
              message: res.data.msg,
              type: "info",
              center: true,
              offset: 150
            })

            if(res.data.code === 200){
              setTimeout((res) => {
                this.$router.push('/userinfo')
              },1000)
            }
          })
        }else if(this.res1 === '') {
          this.$message({
            message: '账号或密码格式错误(至于大于六位)',
            type: "error",
            offset: 150,
            center: true
          })
        }else {
          this.$message({
            message: this.res1,
            type: "error",
            offset: 150,
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
    margin-top: 10px;
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