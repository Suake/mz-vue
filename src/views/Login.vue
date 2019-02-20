<template>
  <div>
    <h1>登录页</h1>
    <input type="text" placeholder="用户名" v-model="userName" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="handleLogin">登录</button>
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
      axios.post('http://localhost:3000/user/login', {
        userName: this.userName,
        password: this.password
      }).then((res) => {
        var data = res.data;
        console.log(data);
        if (data.code === 0) {
          sessionStorage.setItem('nickName', data.data.nickName);
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(data.msg)
        }
      })
    }
  }
}
</script>
