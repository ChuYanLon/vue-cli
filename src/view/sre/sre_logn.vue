<template>
   <div>
      <ul>
         <li class="color">
            <router-link to="/home/main">首页</router-link>
         </li>
          <li>
            <router-link to="/home/Popular recommendation">歌单</router-link>
           </li>
         <li>
            <router-link to="/home/mv">MV</router-link>
         </li>
          <li>
             <router-link to="/home/geshou">热门歌手</router-link>
          </li>
          <li>
              <router-link to="/home/bang">排行</router-link>
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
       transition: 1.5s;
   }
   ul li:nth-child(1){
      margin-left: 20px;
   }
 ul li:hover{
     background: darkgrey;
     border-radius: 12px;
 }
.color{

}
li a{
   text-decoration: none;
   color: #FFFFFF;
}





























</style>