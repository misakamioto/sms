<template>
  <el-container>
    <el-header class="top">
      <HeadTop></HeadTop>
    </el-header>
    <el-container>
      <el-aside class="nav" width="300px">
        <Navb></Navb>
      </el-aside>
      <el-main>
          <router-view :key="key"></router-view>
      </el-main>
    </el-container>
    <Foot></Foot>
  </el-container>
</template>

<script>
// 导航栏
import Navb from "../components/index/Navb";
// 底部
import Foot from "../components/index/Foot";
// 头部
import HeadTop from "../components/index/HeadTop";
// import ChangePassword from '../components/index/ChangePassword'
export default {
  name: "Index",
  components: { Navb, Foot, HeadTop },

  computed: {
    key() {
      const randomNumber = Math.random().toString();
      return this.$route.name !== undefined
        ? this.$route.name + randomNumber
        : this.$route + randomNumber;
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  text-align: center;
  background-color: #c0c4cc;
}
.nav {
  height: 630px;
}
.el-main {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>