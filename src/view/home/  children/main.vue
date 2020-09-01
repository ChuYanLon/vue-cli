<template>
    <el-main class="main" style="padding: 0">
         <el-backtop></el-backtop>
        <el-container>

            <el-aside width="50%" class="left">
                <main_top_left></main_top_left>
            </el-aside>
            <el-aside  width="50%" class="right">
                <main_top_right></main_top_right>
            </el-aside>
        </el-container>
        <el-main class="botton">
          <main_bottom_center></main_bottom_center>
        </el-main>

   </el-main>
</template>

<script>
import main_top_left from "../../main/main_top_left";
import main_top_right from "../../main/main_top_right";
import main_bottom_center from "../../main/main_bottom_center";
    export default {
        name: "main",
        components:{
            main_top_right,
            main_bottom_center,
            main_top_left
        }
    }
</script>

<style scoped>
    /*    内容*/
    .main{
        width: 100%;
    }
</style>