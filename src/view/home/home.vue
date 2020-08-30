<template>
    <el-container id="cont">
        <el-header class="migu" style="height: 100px">
            咪咕音乐
        </el-header>
<!--        轮播图-->
        <el-header class="header" style="height: 350px;">
           <lunbotu></lunbotu>
        </el-header>
<!--        导航栏-->
        <el-container class="sre">
            <el-aside width="70%" class="src_lagn">
               <sre_logn></sre_logn>
            </el-aside>
            <el-container>
                <el-aside class="sre_src" style="width: 100%">
                   <sre_src></sre_src>
                </el-aside>
            </el-container>
        </el-container>
        <!--            内容-->
        <el-main class="main" style="padding: 0;">
           <el-container>
               <keep-alive>
               <router-view></router-view>
               </keep-alive>
           </el-container>
        </el-main>
        <el-footer class="footer">
            <h3>@咪咕音乐|2000|8|25@制作人:褚燕龙</h3>
        </el-footer>
    </el-container>
</template>

<script>
    import sre_src from "../../components/sre_src";
    import sre_logn from "../sre/sre_logn";
    import lunbotu from "../../components/lunbotu";
    export default {
        name: "home",
        data(){
            return{
               path:""
            }
        },
        components:{
            lunbotu,
            sre_src,
            sre_logn,

        }

    }














</script>

<style scoped>
    @import "../../assets/css/home.css";
</style>