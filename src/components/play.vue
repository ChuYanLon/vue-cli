<template>
    <el-container>
       <el-container style="margin-top: 20px">
           <el-page-header @back="goBack" content="详情页面" style="position: absolute;left: 10px;top: 380px">
           </el-page-header>
         <el-aside width="40%" class="img" style="height:550px;overflow: hidden;margin-top: 30px">
             <img :src="this.$store.state.mp4.img" alt="">
         </el-aside>
           <el-main>
               <ul>
                   <li v-for="(value,i) in tableData[0]" :key="i" @click="play(value)">
                       {{i}}
                   </li>
               </ul>
               <h3>{{this.$store.state.mp4.title}}-----{{this.$store.state.mp4.name}}</h3>
               {{n}}
           </el-main>
       </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
            return{
                tableData: [],
                currentPage: 1,
                pagesize: 10,
            }
        },
        methods:{
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            play(val){
                let mp=`https://tool.bitefu.net/video/?url=${val}&type=1`
                window.open(mp)
            },
            goBack() {
                this.$router.push("/home/temp table")
            }
        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            n(){
                if (this.$store.state.mp4.is==true){
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.tableData=[]
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.tableData.push(this.$store.state.mp4.arr[0])
                }
            },
        }
    }
</script>

<style scoped>
 ul li{
     float: left;
     width: 100px;
     height: 50px;
     margin-left: 10px;
     margin-top: 10px;
     text-align: center;
     line-height: 50px;
     background: #FFFFFF;
     box-shadow: 0px 0px 15px darkgrey;
 }
    .img {
        background: url("../assets/img/02.jpg");
        background-size: 100% 100%;

    }
    .img img{
        width: 100%;
        height: 100%;
    }
h3{
    margin: 10px auto;
    text-align: right;
    font-size: 30px;
    font-weight: bold;
    font-family: 方正姚体;
    position: absolute;
    right: 0;
    top: 350px;
}
 @media screen and (max-width: 800px){
     ul{
         margin-top: 50px;
     }
     ul li{
         float: left;
         height: 50px;
         margin-left: 10px;
         margin-top: 10px;
         text-align: center;
         line-height: 50px;
         background: #FFFFFF;
         box-shadow: 0px 0px 15px darkgrey;
     }
     .img {
         background: green;
         display: none;

     }
     .img img{
         width: 100%;
         height: 100%;
     }
     h3{
         margin: 10px auto;
         text-align: right;
         font-size: 25px;
         font-weight: bold;
         font-family: 方正姚体;
         position: absolute;
         right: 30px;
         top: 405px;
     }
 }
 @media screen and (max-width: 900px){
     ul{
         margin-top: 50px;
     }
     ul li{
         float: left;
         height: 50px;
         margin-left: 30px;
         margin-top: 10px;
         text-align: center;
         line-height: 50px;
         background: #FFFFFF;
         box-shadow: 0px 0px 15px darkgrey;
     }
     .img {
         background: green;
         display: none;

     }
     .img img{
         width: 100%;
         height: 100%;
     }
     h3{
         margin: 10px auto;
         text-align: right;
         font-size: 25px;
         font-weight: bold;
         font-family: 方正姚体;
         position: absolute;
         right: 30px;
         top: 405px;
     }
 }

















</style>