<template>
    <el-main class="main">
        <el-container>
            <el-aside width="50%" class="left">
                <ul_left_li></ul_left_li>
            </el-aside>
            <el-container class="right">
                <el-aside class="right_top" style="overflow: hidden" width="100%">
              <ul_right_li></ul_right_li>
                </el-aside>
            </el-container>
        </el-container>
    </el-main>
</template>

<script>
    import ul_left_li from "../../../components/ul_left_li";
   import ul_right_li from "../../../components/ul_right_li";
    export default {
        name: "main",
        components:{
            ul_left_li,
            ul_right_li
        }
    }
</script>

<style scoped>
    /*    内容*/
    .main{
        width: 100%;
    }
    /* 动画*/

    /*左面*/
     .main .left{
        background: #FFFFFF;
        margin-right: 10px;
        box-shadow: 0px 0px 12px #bbbbbb;
        margin-left: 20px;
    }
    .main .right{
        background: #FFFFFF;
        margin-left: 10px;
        box-shadow: 0px 0px 12px #bbbbbb;
        margin-right: 20px;
    }

</style>