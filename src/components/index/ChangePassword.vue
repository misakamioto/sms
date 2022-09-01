<template>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
    <el-form-item label="">
      <el-input disabled v-model="formLabelAlign.name" style="color:red"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="formLabelAlign.newPassword"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formLabelAlign.confPassword"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" style="margin-left:100px" @click="change">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
      return {
        formLabelAlign: {
          name: '都登陆了，还要输入密码?不可能！！！',
          newPassword: '',
          confPassword: ''
        }
      };
    },
    methods:{
      change(){
        if(this.formLabelAlign.newPassword === "" || this.formLabelAlign.confPassword === ""){
          this.$message.error("新密码不能为空")
        }
        else if(this.formLabelAlign.newPassword != this.formLabelAlign.confPassword ){
          this.$message.error("密码不一致")
        }
        else if(this.formLabelAlign.newPassword.length < 6){
          this.$message.error("密码长度过短")
        }
        else{
          this.$store.commit("changePassword",this.formLabelAlign.newPassword)
          this.$message({
            message:"密码修改成功，3秒后跳转到登录页面",
            type:"success"
          })
          setTimeout(() => {
            this.$router.replace({
              name:'login'
            })
          }, 3000);
        }
      }
    }
};
</script>

<style lang="less" scoped>
.el-form{
    margin-left: 400px;
    margin-top: 30px;
    .el-input{
    width: 300px;
}
}

</style>