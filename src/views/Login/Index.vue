<template>
  <div class='login-main'>
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
    </div>
    <div class="login-form">
      <div class="form-group">
        <input type="text" placeholder="用户名" v-model="userName" class="input-control" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="密码" v-model="password" class="input-control" />
      </div>
      <div class="login-btn" @click="handleLogin">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      axios.post('http://132.232.204.232:3000/user/login', {
        userName: this.userName,
        password: this.password
      }).then((res) => {
        var data = res.data;
        console.log(data);
        if (data.code === 0) {
          sessionStorage.setItem('nickName', data.data.nickName);
          if (this.$route.query.redirect) {
            this.$router.replace({
              path: this.$route.query.redirect
            })
          } else {
            this.$router.push('/fims');
          }
        } else {
          alert(data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">
  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }
  .login-form{
    width: 100%;
    position: relative;
    .form-group{
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      .input-control{
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
        border-bottom: 1px solid #eee;
      }
    }
    .login-btn{
      margin-top: 70px;
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
    }
  }
</style>
