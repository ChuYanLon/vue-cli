<template>
   <el-container>
       <el-header>
           <h2>{{this.$store.state.gedan_arr.arr[0].name}}</h2>
       </el-header>
       <el-container>
           <el-aside>
               <ul>
                   <li v-for="(value,i) in this.$store.state.gedan_arr.arr[0].trackIds" :key="i" @click="jin_bth(
                       value.id
                   )">
                       <el-button type="success" plain>点击按钮获取歌曲</el-button>
                   </li>
               </ul>
           </el-aside>
           <el-main>
               <img :src="this.$store.state.gedan_arr.arr[0].coverImgUrl" alt="" class="img">
               <p style="text-indent: 4em
">
                   {{this.$store.state.gedan_arr.arr[0].description}}
               </p>
           </el-main>
       </el-container>
   </el-container>
</template>

<script>
    export default {
        methods:{
            jin_bth(id){
                this.$store.state.sre_src.arr=[]
                this.$store.state.sre_src.is==true
                this.$store.state.sre_src.is=true
                this.$store.state.sre_src.url.id=id
                setTimeout(()=>{
                    this.$store.state.sre_src.is==false
                    this.$store.state.sre_src.is=false
                },500)
                this.$store.state.sre_src.arr=[]
                for (let i=0;i<this.$store.state.gedan_arr.arr[0].trackIds.length;i++){
                    this.$store.state.sre_src.arr.push(this.$store.state.gedan_arr.arr[0].trackIds[i])
                    console.log(this.$store.state.gedan_arr.arr[0].trackIds[i])
                }
                console.log( this.$store.state.sre_src.arr)
                this.$router.push("/music player")
            }
        },
    }
</script>

<style scoped>
   ul{
      /*background: #409EFF;*/
       height:800px;
   }
    ul li{
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
    img{
        margin-bottom: 20px;
        width: 100%;
    }
</style>