<template>
    <el-container>
        <el-header class="video_header">
            <span>当前正在播放: {{this.$store.state.mv_src.mp4.title}}</span>
            <span>歌手: {{this.$store.state.mv_src.mp4.name}}</span>
            <div class="video_on">
                <el-button type="primary" @click="video_home">返回首页</el-button>
                <el-button type="primary" @click="video_mv">返回MV</el-button>
            </div>
        </el-header>
        <el-container class="video_play">
            <el-aside class="play" style="background: black;overflow: hidden;position: relative;border-right: 5px solid #bbbbbb" width="70%">
                            <video-player  class="video-player vjs-custom-skin mp4"
                                           ref="videoPlayer"
                                           :playsinline="true"
                                           :options="playerOptions"
                            ></video-player>
                {{mv_right}}
            </el-aside>
            <el-container>
                <el-main class="video_ul">
                    <ul>
                        <h2 style="text-align: left;color: #f8f8f8">咪咕视频在线播放  :</h2>
                         <li v-for="(value,i) in title[0][0]" :key="i" @click="video_ul({
                         id:value.id,
                         img:value.cover,
                         title:value.name,
                         name:value.artistName
                         })">
                             {{value.name}}
                         </li>
                    </ul>
                </el-main>
            </el-container>
        </el-container>
        <el-footer class="video_footer">
            @咪咕视频在线播放|2020-8-15 8:25|制作者:褚燕龙
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Video playback",
        data(){
            return{
                title:[],
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src:""
                    }],
                    poster:"", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            mv_right() {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties,no-undef
                this.title=[]
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.title.push(this.$store.state.mv_src.arr)
                console.log(   this.title)
                console.log(this.$store.state.mv_src.arr)
                if (this.$store.state.mv_src.mp4.is){
                    let url=this.$store.state.mv_src.mp4.id
                    // eslint-disable-next-line vue/no-async-in-computed-properties
                    this.$http({
                        url:"/mv/url?id="+url
                    }).then(res=>{
                        this.$store.state.mv_src.mp4.url=res.data.url
                        console.log(res)
                        this.playerOptions.sources[0].src=this.$store.state.mv_src.mp4.url
                        this.playerOptions.poster=this.$store.state.mv_src.mp4.img
                    })
                }

            }
        },
        methods:{
            video_home(){
                this.title=[]
                this.$store.state.mv_src.arr=[]
                this.$router.push("/home")
            },
           video_mv(){
               this.title=[]
               this.$store.state.mv_src.arr=[]
                this.$router.push("/home/mv")
            },
            video_ul({id,img,title,name}){
                this.$store.state.mv_src.mp4.is=true
                this.$store.state.mv_src.mp4.id=id
                console.log(id,img,title,name)
                this.$store.state.mv_src.mp4.img=img,
                    this.$store.state.mv_src.mp4.name=name,
                    this.$store.state.mv_src.mp4.title=title,
                setTimeout(()=>{
                    this.$store.state.mv_src.mp4.is=false
                },1000)

            }
        }
    }
</script>

<style scoped>
.video_header{
    width: 100%;
    background: black;
    color: #FFFFFF;
    text-align: center;
}
.video_header span{
    display: block;
}
.video_play{
    padding: 10px;
}
.video_play .video_ul{
    height: 620px;
    padding: 20px;
    background: black;
    box-shadow: 0px 0px 15px #99a9bf;
    border-left: 3px solid black;
    box-sizing: border-box;
}
.video_play .video_ul li{
    margin-top: 10px;
    /*background:#f8f8f8;*/
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    color: #f8f8f8;
    border-radius: 12px;
}
.video_play .video_ul li:nth-child(1){
    margin-top: -10px;
}
.video_play .video_ul li:hover{
    background: darkgray;
}
.video_play .play .mp4{
    position: absolute;
    width: 100%;
    left:2px;
    height: 100%;
    bottom: -25px;
    /*box-shadow: 0px 0px 15px #bbbbbb;*/
}
.video_footer{
    background: black;
    width: 100%;
    height: 87px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
    box-shadow: 0px 0px 15px azure;
}
.video_on{
    position: absolute;
    right: 10px;
    top: 10px;
}












</style>