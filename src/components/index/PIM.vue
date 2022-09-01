<template>
  <el-descriptions
    direction="vertical"
    :column="4"
    border
  >
    <el-descriptions-item label="学工号">{{tableData.LearnToWorkNumber}}</el-descriptions-item>
    <el-descriptions-item label="姓名">{{tableData.name}}</el-descriptions-item>
    <el-descriptions-item label="居住地" :span="2">{{tableData.address}}</el-descriptions-item>
    <el-descriptions-item label="学校">
      <el-tag size="small">{{tableData.school}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="备注"
      ></el-descriptions-item
    >
  </el-descriptions>
</template>

<script>
export default {
  // 信息查询
  name: "PIM",
  data() {
    return {
      tableData:{
            ...this.$store.state.Person
      }
    }
  },
};
</script>

<style>
</style>