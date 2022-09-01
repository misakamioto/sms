<template>
  <div>
    <Search></Search>
    <TableList :searchdata="searchdata"></TableList>
  </div>
</template>

<script>
import Search from './Search'
import TableList from './TableList'
    export default {
        // 成绩查询
        name:"ScoreInquiry",
        data() {
            return {
                searchdata:""
            }
        },
         components:{Search,TableList},
         mounted(){
            this.$bus.$on("query",(data)=>{
                this.searchdata = data
            })
        },
        beforeDestroy(){
            this.$bus.$off("query")
        }
    }
</script>

<style lang="less" scoped>
   div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1163.2px;
        height: 590px;
    }
</style>