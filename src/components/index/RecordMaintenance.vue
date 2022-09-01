<template>
    <div>
        <Search></Search>
        <TableRecMan :searchdata="searchdata"></TableRecMan>
    </div>
</template>

<script>
import Search from './Search'
import TableRecMan from './TableRecMan'
    export default {
        // 成绩维护
        name:'RecordMaintenance',
        data() {
            return {
                searchdata:""
            }
        },
        components:{Search,TableRecMan},
        mounted(){
            this.$bus.$on("search",(data)=>{
                this.searchdata = data
            })
        },
        beforeDestroy(){
            this.$bus.$off("search")
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