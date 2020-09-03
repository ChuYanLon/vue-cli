<template>
    <el-container>
      <el-header class="header_home" height="300px">
          天空影视
      </el-header>
       <el-main>
           <src></src>
<!--           <el-button type="primary"  class="io_bth el-icon-video-camera" @click="bth_tabs">-->
<!--               <router-link to="/home/main">直播</router-link>-->
<!--           </el-button>-->
           <el-dropdown class="io_bth">
               <el-button type="primary" class="ibth">
                   功能列表<i class="el-icon-arrow-down el-icon--right"></i>
               </el-button>
               <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>
                       <router-link to="/home/main">直播</router-link>
                   </el-dropdown-item>
                   <el-dropdown-item>
                       <router-link to="/home/tem">视频解析</router-link>
                   </el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
           <keep-alive>
           <router-view :key="$route.path+$route.query.t"></router-view>
           </keep-alive>
       </el-main>
    </el-container>
</template>

<script>
    import src from "../components/src";
    export default {
        name: "home",
        components:{
            src
        },
    }
</script>

<style scoped>
  .header_home{
       background: black;
      color: floralwhite;
      text-align: center;
      width: 100%;
      line-height: 300px;
      font-family: 华文隶书;
      font-size: 100px;
  }
  .io_bth{
      border-radius: 0;
      position: absolute;
      top:321px;
      left: 950px;
      height: 40px;
      border-right: 1px solid #bbbbbb;
      box-sizing: border-box;
  }
  a{
      text-decoration: none;
      color: black;
  }
  .ibth{
      height: 39px;
      border-radius: 0;
  }
@media screen and (max-width: 800px){
    .header_home{
        background:black;
        color: floralwhite;
        text-align: center;
        width: 100%;
        font-family: 华文隶书;
        font-size: 50px;
        line-height: 300px;
    }
    .io_bth{
        border-radius: 0;
        position: absolute;
        top:321px;
        left:280px;
        height: 40px;
        border-right: 1px solid #bbbbbb;
        box-sizing: border-box;
    }
}












</style>