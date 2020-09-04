<template>
    <div>
        <el-page-header @back="goBack" content="详情页面" style="margin-top: 20px">
        </el-page-header>
        <el-container>
            <el-main>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>共搜索{{this.$store.state.arr[0].total}}部影片</span>
                        <el-button style="float: right; padding: 3px 0" type="text">{{newdata}}</el-button>
                    </div>
                     <div class="img" v-for="(value,i) in this.$store.state.arr[0].data" :key="i">
                         <img :src="value.pic" @click="bth_img(value)">
                         <h2 style="position: absolute; left:0px;top: 0px;color:floralwhite;font-weight: bold;
                         background: dimgray;width: 100%;height: 30px;
                         text-align: center;line-height: 30px;
                         ">{{value.name}}</h2>
                         <h2 style="position: absolute; right: 0;bottom: 0px;color: floralwhite;
                         background: slategray;width: 100%;height: 30px;
                         text-align: center;line-height: 30px;
                        ">{{value.label}}</h2>
                     </div>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import http from "../api";
    export default {
        name: "temp_table",
        methods: {
            goBack() {
                this.$router.push({
                    path:"/home",
                    query:{
                        t:Date.now()
                    }
                })
            },
            bth_img(val){
                let url=`/api/vatfs/resource_site_collect/getVDetail?vid=`+val.vid
                http({
                    url:url
                }).then(res=>{
                    this.$store.state.mp4.title=""
                    this.$store.state.mp4.name=""
                    this.$store.state.mp4.img=""
                    this.$store.state.mp4.arr=[]
                    this.$store.state.mp4.title=res.data.data.name
                    this.$store.state.mp4.name=res.data.data.label
                    this.$store.state.mp4.img=res.data.data.pic
                    this.$store.state.mp4.arr.push(res.data.data.playUrl)
                    this.$store.state.mp4.is=true
                    setTimeout(()=>{
                        this.$store.state.mp4.is=false
                    },100)
                    this.$router.push("/home/video")
                })
            }
        },
        data(){
            return{
                newdata:new Date()
            }
        }
    }
</script>

<style scoped>

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .img{
        background:url("../assets/img/01.jpg");
        background-position: center;
        width: 22%;
        height: 300px;
        display: inline-block;
        position: relative ;
        margin: auto;
        margin-left: 125px;
        margin-top:80px;
        overflow: hidden;
    }
    .img img{
        width: 100%;
        height: 300px;
    }
    @media screen and (max-width: 800px){
        .img{
            background:url("../assets/img/01.jpg");
            background-position: center;
            width: 100%;
            height: 300px;
            display: inline-block;
            position: relative ;
            margin: auto;
            margin-left: 0px;
            margin-top:20px;
            overflow: hidden;
        }
        .img img{
            width: 100%;
            height: 300px;
        }
    }



































</style>