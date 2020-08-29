<template>
    <ul>
        <h1 style="text-align: center;line-height: 50px;font-family: 华文琥珀;color: darkgreen;letter-spacing: 10px;
            font-size: 30px;
           ">MV视频</h1>
        <!--        此处用for循环把所有的歌曲打印出来，点击事件传递当前歌曲的id，用于axios请求-->
        <li v-for="(value,i) in this.$store.state.sre_src.arr_mv" :key="i"
            @click="ul_right_li_bth(value.mvid)"
        >
            {{value.name}}
        </li>
        <hr>
        <el-alert
                title="本次搜索歌MV曲数:"
                type="success"
                :description=this.$store.state.sre_src.arr_mv.length
                show-icon>
        </el-alert>
    </ul>
</template>

<script>

    export default {
        name:"ul_right_li",
        data(){
            return{
                //歌曲id
                id:""
            }
        },
        methods:{
            ul_right_li_bth(mvid){
                this.$store.state.mv_src.mp4.is=true
                this.$store.state.mv_src.mp4.id=mvid
                this.$store.state.mv_src.mp4.name=this.$store.state.sre_src.url.mp3.name
                this.$store.state.mv_src.mp4.img=this.$store.state.sre_src.url.mp3.img
                this.$store.state.mv_src.mp4.title= this.$store.state.sre_src.url.mp3.title
                this.$router.push("/Video playback")


            },

        }
    }
</script>

<style scoped>
    ul li{
        text-indent: 30px;
        display: block;
        line-height: 30px;
        padding: 10px;
        font-size: 15px;
        cursor: pointer;
    }


















</style>
