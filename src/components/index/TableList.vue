<template>
  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%; margin-top: 30px"
  >
    <el-table-column prop="LearnToWorkNumber" label="学号" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="chi" label="语文" width="180"> </el-table-column>
    <el-table-column prop="mat" label="数学" width="180"> </el-table-column>
    <el-table-column prop="eng" label="英语"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TableList",
  data() {
    return {
      tableData: [...this.$store.state.students],
      tableData2: [...this.$store.state.students],
    };
  },
  props:['searchdata'],
  watch:{
    searchdata(data){
      let exist = 0;
      this.tableData2.forEach((element) => {
        if (element.LearnToWorkNumber === Number(data)) {
          let a = [element];
          this.tableData = a;
          exist = 1;
        }
        else if(data === ""){
        this.tableData = this.tableData2
        exist = 1
      }
      });
      if (exist == 0) {
        alert("查找的用户不存在");
      }
    }
  },
};
</script>

<style lang="less" scoped>
.el-tab {
  width: 1103.2px;
  height: 500px;
}
</style>