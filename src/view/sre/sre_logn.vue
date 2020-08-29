<template>
   <div>
      <ul>
         <li class="color">
            <router-link to="/home/main">首页</router-link>
         </li>
          <li>
            <router-link to="/home/Popular recommendation">热门推荐</router-link>
           </li>
         <li>
            <router-link to="/home/mv">MV</router-link>
         </li>
         <li>
            <router-link to="/home/radio station">电台</router-link>
         </li>
         <li>
            <router-link to="/home/my">个人中心</router-link>
         </li>
      </ul>
   </div>
</template>

<script>
    export default {
        name: "sre_logn",
         data(){
           return{
              color:"color",
              logn:["首页","歌单","MV","电台","我的"],
              is:false
           }
         }
    }
</script>

<style scoped>
   ul{
      display: flex;
      justify-content: space-between;
      line-height: 60px;
     /*background: #FFFFFF;*/
   }
   ul li{
    color: #FFFFFF;
      width: 100px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
   }
   ul li:nth-child(1){
      margin-left: 20px;
   }
 ul li:hover{
    background:#409EFF;
 }
.color{
   background:#409EFF;
}
li a{
   text-decoration: none;
   color: #FFFFFF;
}





























</style>