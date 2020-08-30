<template>
  <el-container class="mv_cont" style="margin-left: 10px">
      <el-header class="mv_header" style="height: 100px">
      <checkout></checkout>
      </el-header>
      <el-container class="mv_main">
          <el-aside width="99%" class="mv_left">
              <keep-alive>
                  <mv_left_li></mv_left_li>
              </keep-alive>
          </el-aside>
      </el-container>
  </el-container>
</template>

<script>
   import mv_left_li from "../../mv/mv_left_li";
   import checkout from "../../mv/checkout";
    export default {
        name: "mv",
        data(){
            return{
                path:""
            }
        },
        components:{
            checkout,
            mv_left_li,
        }
    }
</script>

<style scoped>
  .mv_cont{
      width: 100%;
      padding: 20px 0px;
  }
    .mv_main{
        margin-top:-40px;
    }

























</style>