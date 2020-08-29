<template>
 <el-container>
     <el-header style="background: #bbbbbb;width: 100%;height: 60px">
         <Popular_logn></Popular_logn>
     </el-header>
     <keep-alive>
     <router-view></router-view>
     </keep-alive>
 </el-container>
</template>

<script>
    import Popular_logn from "../../Popular recommendation/Popular_logn";
    export default {
        name: "Popular recommendation",
        components:{
            Popular_logn
        }
    }
</script>

<style scoped>

</style>