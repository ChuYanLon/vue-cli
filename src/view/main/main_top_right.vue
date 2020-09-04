<template>
    <el-card class="box-card" style="margin-top: 10px;margin-bottom: 10px">
        <div slot="header" class="clearfix">
            <span>推荐MV</span>
        </div>
        <div v-for="(value,i) in list[0]" :key="i" class="text item">
            <el-row>
                <el-col :span="30">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="value.picUrl" class="image">
                        <div style="padding: 14px;">
                            <span>MV: {{value.name}}</span>
                            <span>作者: {{value.artistName}}</span>
                            <span>{{value.copywriter}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button" @click="mv_bth(value)">播放MV</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "main_top_right",
        data(){
            return{
                list:[],
                currentDate: new Date()
            }
        },
        mounted() {
            this.$http({
                url:"/personalized/mv"
            }).then(res=>{
                this.list.push(res.result)
            })
        },
        methods:{
            mv_bth(val){
                this.$store.state.mv_src.arr=[]
                this.$store.state.mv_src.mp4.url=""
                this.$store.state.mv_src.mp4.img=""
                this.$store.state.mv_src.mp4.title=""
                this.$store.state.mv_src.mp4.name=""
                this.$http({
                    url: "/mv/url?id="+val.id
                }).then(res => {
                        this.$store.state.sre_src.is=true
                        this.$store.state.mv_src.mp4.is=true
                        this.$store.state.mv_src.mp4.id=val.id
                        this.$router.push("/Video playback")

                        setTimeout(()=>{
                            this.$store.state.mv_src.mp4.is=false
                            this.$store.state.sre_src.is=false
                        },500)
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 95%;
        margin: 0 auto;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }
 span{
     color: darkgreen;
     font-weight: bold;
     margin-left: 20px;
     display: block;
 }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>