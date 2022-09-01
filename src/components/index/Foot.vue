<template>
  <footer class="foot">
    <p>欢迎您，<b>{{$store.state.username}}</b></p>
    <p class="time" align="right"><b>现在是{{datetime}}</b></p>
  </footer>
</template>

<script>
// 获取时间
import dayjs from "dayjs";
export default {
  name: "Foot",
  components: { dayjs },
  data() {
    return {
      username:"",
      timer: "",
      datetime: dayjs().format("YYYY-MM-DD HH:mm:ss"), 
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.datetime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="less" scoped>
.foot {
  display: flex;
  color: #409eff;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 35px;
  background: #c0c4cc;
}
</style>