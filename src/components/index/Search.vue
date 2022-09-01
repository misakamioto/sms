<template>
  <el-input
    style="margin-top: 30px"
    :placeholder="show"
    suffix-icon="el-icon-reading"
    v-model="input1"
    @change="password"
  >
  </el-input>
</template>

<script>
export default {
  name: "Serch",
  data() {
    return {
      input1: "",
      show: "请输入学号",
    };
  },
  created() {
    if (this.$route.query.a === "t") {
      this.show = "请输入工号";
    }
  },
  methods:{
    password(){
      if(isNaN(Number(this.input1))){
        alert("不能输入非数字的字符")
      }
      else{
        if(this.$route.query.a === "c"){
          this.$bus.$emit("query",this.input1)
        }
        else{
          this.$bus.$emit("search",this.input1)
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 300px;
  height: 40px;
}
</style>