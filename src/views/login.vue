<template>
  <div class="container" :style="{ backgroundImage: 'url(' + bgimg + ')' }">
    <div class="login-wrapper">
      <div class="header">慧慧后台管理</div>
      <div class="form-wrapper">
        <a-input placeholder="请输入账号" />
        <a-input placeholder="请输入密码" />
        <a-button type="primary">登录</a-button>
      </div>
      <div class="msg">
        <span>时间2023</span>
        <a @click="handleBg">切换背景</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      bgArr: ['wanyebg.gif', 'jbg.gif', '1.jpg', '2.jpeg', '3.png', '4.jpg', '5.jpeg', '6.gif', '7.jpeg', '8.gif'],
      bgimg: null,
      bgIndex: 0
    }
  },
  mounted() {
    this.bgimg = require('@/assets/login/' + this.bgArr[this.bgIndex])
  },
  methods: {
    // 切换背景图
    handleBg() {
      if (this.bgIndex < this.bgArr.length - 1) {
        this.bgIndex = this.bgIndex + 1
      } else {
        this.bgIndex = 0
      }
      this.bgimg = require('@/assets/login/' + this.bgArr[this.bgIndex])
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  background: rgba(255, 255, 255, 0.7);
  width: 450px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
}
.form-wrapper {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #1b5fe9;
}
</style>
