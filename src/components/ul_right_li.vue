<template>
    <ul  style="height: 580px">
        <h1 style="text-align: center;line-height: 50px;font-family: 华文琥珀;color: darkgreen;letter-spacing: 10px;
            font-size: 30px;
           ">MV视频</h1>
        <!--        此处用for循环把所有的歌曲打印出来，点击事件传递当前歌曲的id，用于axios请求-->
        <li v-for="(value,i) in this.$store.state.sre_src.arr_mv" :key="i"
            @click="ul_right_li_bth({mvid:value.mvid,val:value})"
        >
            {{value.name}}
        </li>

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
            ul_right_li_bth({mvid,val}){
                this.$store.state.mv_src.mp4.name=""
                this.$store.state.mv_src.mp4.img=""
                this.$store.state.mv_src.mp4.title=""
                this.$store.state.mv_src.mp4.is=true
                this.$store.state.mv_src.is=true
                this.$store.state.mv_src.mp4.id=mvid
                this.$store.state.mv_src.mp4.name=val.artists[0].name
                this.$store.state.mv_src.mp4.img=this.$store.state.sre_src.url.mp3.img
                this.$store.state.mv_src.mp4.title=val.name
                this.$router.push("/Video playback")
                setTimeout(()=>{
                    this.$store.state.mv_src.mp4.is=false
                    this.$store.state.mv_src.is=false
                },500)
            },

        }
    }
</script>

<style scoped>
    ul li{
        text-indent: 30px;
        display: block;
        line-height: 30px;
        color: #f8f8f8;
        font-size: 15px;
        cursor: pointer;
    }


















</style>
