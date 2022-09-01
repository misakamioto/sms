<template>
  <el-menu
    background-color="#EBEEF5"
    :default-active="$router.path"
    :router="true"
  >
    <el-submenu index="1">
      <template slot="title"
        ><i class="el-icon-data-line"></i>成绩管理</template
      >
      <el-menu-item-group>
        <el-menu-item index="/index/ScoreInquiry?a=c">成绩查询</el-menu-item>
        <el-menu-item v-show="type[0]" index="/index/RecordMaintenance?a=u"
          >成绩维护</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-user"></i>个人信息</template>
      <el-menu-item-group>
        <el-menu-item index="/index/PIM">信息查询</el-menu-item>
        <el-menu-item index="/index/ChangePassword"
          >修改密码</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu v-show="type[1]"  index="3">
      <template slot="title"><i class="el-icon-setting"></i>学生管理</template>
      <el-menu-item-group>
        <el-menu-item index="/index/StudentInformation?a=s"
          >学生信息管理</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu v-show="type[2]" index="4">
      <template slot="title"><i class="el-icon-setting"></i>教师管理</template>
      <el-menu-item-group>
        <el-menu-item index="/index/TeacherInformation?a=t"
          >教师信息管理</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Navb",
  data() {
    return {
      type:[

      ]
    }
  },
  mounted(){
      if(this.$store.state.Permission === 9){
        this.type = [0,0,0]
      }
      else if(this.$store.state.Permission === 6){
        this.type = [1,1,0]
      }
      else{
        this.type = [1,1,1]
      }
  }
};
</script>

<style scoped>
</style>