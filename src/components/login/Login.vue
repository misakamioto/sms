<template>
  <div>
    <el-container>
      <el-header class="top"><h1>学生成绩管理系统</h1></el-header>
      <!-- 登录页顶部 -->
      <!-- 登录页输入框组 -->
      <el-main class="login">
        <el-input
          class="input"
          placeholder="学工号"
          v-model="LearnToWorkNumber"
          clearable
        >
        </el-input>
        <el-input
          class="input"
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <!-- 身份类型 -->
        <el-radio-group v-model="radio" class="radio">
          <el-radio :label="3">管理员</el-radio>
          <el-radio :label="6">教师</el-radio>
          <el-radio :label="9">学生</el-radio>
        </el-radio-group>
        <el-button
          style="height: 40px"
          class="btn"
          type="primary"
          @click="loginCheck"
          >登录</el-button
        >
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      LearnToWorkNumber: "",
      password: "",
      radio: 9,
    };
  },
  methods: {
    loginCheck() {
      if (this.LearnToWorkNumber === "" || this.password === "") {
        this.$message.error("用户名或密码不能为空");
      } else {
        this.$store.dispatch("updateLearnToWorkNumber", [
          this.LearnToWorkNumber,
          this.radio,
          this.password,
        ]);
        this.$store.commit("Permission", this.radio);
        if (this.$store.state.isErr === true) {
          this.$router.replace({
            name: "index",
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  text-align: center;
  h1 {
    color: #409eff;
    line-height: 60px;
  }
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  .input {
    margin-top: 20px;
    width: 150px;
  }
  .btn,
  .radio {
    margin-top: 20px;
  }
}
</style>