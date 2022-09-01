<template>
  <el-table :data="tableData" style="width: 100%;margin-top: 30px;" height="250">
    <el-table-column label="学号" width="180">
      <template slot-scope="scope">
        <el-input v-show="scope.row.isShowadmin" v-model.number="scope.row.LearnToWorkNumber"></el-input>
        <span v-show="!scope.row.isShowadmin">{{ scope.row.LearnToWorkNumber }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-input v-show="scope.row.isShowadmin" v-model="scope.row.name"></el-input>
        <span v-show="!scope.row.isShowadmin">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column v-if="admin" label="语文" width="180">
      <template slot-scope="scope">
        <el-input v-show="scope.row.isShow" v-model="scope.row.chi"></el-input>
        <span v-show="!scope.row.isShow">{{ scope.row.chi }}</span>
      </template>
    </el-table-column>
    <el-table-column v-if="admin" label="数学" width="180">
      <template slot-scope="scope">
        <el-input v-show="scope.row.isShow" v-model="scope.row.mat"></el-input>
        <span v-show="!scope.row.isShow">{{ scope.row.mat }}</span>
      </template>
    </el-table-column>
    <el-table-column v-if="admin" label="英语" width="180">
      <template slot-scope="scope">
        <el-input v-show="scope.row.isShow" v-model="scope.row.eng"></el-input>
        <span v-show="!scope.row.isShow">{{ scope.row.eng }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" 
        v-show="del(scope.row)"
        @click="handleEdit(scope.row)"
          >编辑</el-button
        >
        <el-button v-show="del(scope.row)"
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
        <el-button v-show="scope.row.isShow"
          size="mini"
          type="primary"
          @click="handleConf(scope.$index,scope.row)"
          >确定</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TableRecMan",
  data() {
    return {
      tableData: [
        
      ],
      tableData2:[],
      //管理登录者的列表栏显示
      admin:1,
      // 管理成绩维护隐藏删除按钮
      u:1,
    };
  },
  props:['searchdata'],
  methods: {
    handleEdit(row) {
      if(this.$route.query.a === "u"){
        row.isShow = true
      }
      else{
        row.isShow = true
        row.isShowadmin = true
      }
    },
    handleConf(index,row){
      // 样式的修改
      if(this.$route.query.a === "u"){
        row.isShow = false
      }
      else{
        row.isShow = false
        row.isShowadmin = false
      }
      // 数据的修改
      console.log(row.LearnToWorkNumber,this.tableData2[index].LearnToWorkNumber);
      // this.$store.commit("redact",{index,row})
    },
    // 数据的删除
    handleDelete(index, row) {
      this.$confirm(`此操作将删除${row.name}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$store.commit("delete",{index,row})
          this.tableData.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    del(row){
      if(row.isShow){
        return false
      }
      else{
        return true
      }
    }
  },
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
  created(){
    if(this.$route.query.a === "s"){
      this.tableData = [...this.$store.state.students]
      this.tableData2 = [...this.$store.state.students]
      for(let i = 0;i < this.tableData.length;i++){
          this.$set(this.tableData[i],'isShow',false)
          this.$set(this.tableData[i],'isShowadmin',false)
        }
    }
    else if(this.$route.query.a === "u"){
        this.u = 0
        this.tableData = [...this.$store.state.students]
        this.tableData2 = [...this.$store.state.students]
        for(let i = 0;i < this.tableData.length;i++){
          this.$set(this.tableData[i],'isShow',false)
          this.$set(this.tableData[i],'isShowadmin',false)
        }
    }
    else{
      this.tableData = [...this.$store.state.teachers]
      this.tableData2 = [...this.$store.state.teachers]
      this.admin = 0
      for(let i = 0;i < this.tableData.length;i++){
          this.$set(this.tableData[i],'isShow',false)
          this.$set(this.tableData[i],'isShowadmin',false)
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