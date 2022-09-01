<template>
  <div>
    <h1>学生成绩管理系统</h1>
    <el-button class="btn" type="primary" icon="el-icon-user" disabled circle>{{$store.state.username}}</el-button>
    <a href="javascript:;" @click="login">退出登录</a>
  </div>
</template>

<script>
export default {
  name: "HeadTop",
  data() {
    return {
      
    }
  },
  methods:{
    login(){
      this.$router.replace({
        name:'login'
      })
    }
  }
};
</script>

<style lang="less" scoped>
h1 {
  color: #409eff;
}
.btn {
  float: right;
  margin-top: -60px;
  margin-right: 100px;
}
a {
  float: right;
  margin-top: -50px;
  margin-right: 20px;
}
</style>