<template>
    <el-container>
        <el-header class="music_header">
             <span>当前正在播放: {{audio.name}}</span>
            <span>歌手:  {{audio.artist}}</span>
            <div class="music_on">
                <el-button @click="show3 = !show3" class="el-icon-menu"></el-button>
                    <div style="margin-top: 20px">
                        <el-collapse-transition>
                            <div v-show="show3">
                                <el-button type="primary" @click="music_in" class="bth_on">返回首页</el-button>
                                <el-button type="primary" @click="music_geshou" class="bth_on">返回歌手页面</el-button>
                                <el-button type="primary" @click="music_gedan" class="bth_on">返回歌单</el-button>
                                <el-button type="primary" @click="music_gequku" class="bth_on">返回榜单</el-button>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
        </el-header>
        <el-container class="music_play">
               <el-aside class="play" style="background: black;overflow: hidden;position: relative;border-right: 5px solid #bbbbbb" width="70%">
                   <el-main style="background: black;height: 540px;overflow: hidden">
                      <img :src="audio.cover" style="width: 100%;height: 100%">
                   </el-main>
                   <el-footer>
                 <aplayer :IrcType="1" :audio="audio" class="mp3"></aplayer>
                   </el-footer>
                   {{text}}
               </el-aside>
            <el-container>
                <el-main class="music_ul">
                    <ul>
                        <h2 style="text-align: left;color: #f8f8f8">咪咕音乐在线播放  :</h2>
                        <li v-for="(value,i) in title[0]" :key="i" @click="music_bth(value.id)">
                            {{value.name}}
                            <span v-if="value.name==null">{{value.id}}</span>
                        </li>
                    </ul>
                </el-main>
            </el-container>
        </el-container>
        <el-footer class="music_footer">
            @网易云音乐|2020-8-15 8:25|制作者:褚燕龙
        </el-footer>
    </el-container>
</template>

<script>

    export default {
        name: "right_top",

        data() {
            return {
                show3: false,
                 mp3:"",
                title:[],
                audio: {
                    name: '',
                    artist: '',
                    url: '',
                    cover: '', // prettier-ignore
                    lrc: ''
                },
            }
        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            text(){
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.title=[]
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.title.push(this.$store.state.sre_src.arr)
                //用歌曲id请求歌曲地址
                let url=this.$store.state.sre_src.url.id
                if (this.$store.state.sre_src.is==true){
                    // eslint-disable-next-line vue/no-async-in-computed-properties
                    this.$http({
                        url:"/song/url?id="+url
                    }).then(res=>{
                        //判断请求过来的地址是否有url地址
                        console.log(res)
                        if (res.data[0].url){
                            //把请求过来的地址设置到 this.$store.state.sre_src.url.mp3.url里面
                            this.$store.state.sre_src.url.mp3.url=res.data[0].url

                        }else {
                            //如果没有就把 this.$store.state.sre_src.url.mp3.url清空
                            this.$store.state.sre_src.url.mp3.url=""
                            this.$message.error('咪咕还没有这首歌音频的版权！如有点击播放的按钮，那就请观看视频！咪咕君会尽快解决此问题的！' +
                                '如若没有，那就请点击其他音乐，感谢支持！');
                        }

                    }).catch(error=>{
                        console.log(error)
                    })
                }
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.mp3="" //把当前data里面的mp3清空
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.mp3=this.$store.state.sre_src.url.mp3.url //然后把歌曲地址设置到当前的data.mp3里面
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.audio.url="" //把aplayer音乐插件数据里面的地址清空
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.audio.url=this.mp3//把当前data.mp3的歌曲地址数据设置到aplauyer.url用于播放音乐
                // eslint-disable-next-line vue/no-async-in-computed-properties
                if(this.$store.state.sre_src.is==true){
                    // eslint-disable-next-line vue/no-async-in-computed-properties
                    this.$http({//请求歌曲详情
                        url: "/song/detail?ids="+url   //当前的url是this.$store.state.sre_src.url.id
                    }).then(res=>{
                        //把请求过来的歌手名字设置到 this.$store.state.sre_src.url.mp3.name
                        this.$store.state.sre_src.url.mp3.name=res.songs[0].ar[0].name
                        //把请求过来的歌曲图片设置到 this.$store.state.sre_src.url.mp3.img
                        this.$store.state.sre_src.url.mp3.img=res.songs[0].al.picUrl
                        //把请求过来的歌曲名字设置到 this.$store.state.sre_src.url.mp3.title
                        this.$store.state.sre_src.url.mp3.title=res.songs[0].name
                          //把this.$store.state.sre_src.url.mp3.title里面的歌曲名字设置到aplayer的name数据中，
                        //用于显示歌曲名字
                        this.audio.name=this.$store.state.sre_src.url.mp3.title
                        //把this.$store.state.sre_src.url.mp3.img里面的歌曲名字设置到aplayer的cover数据中，
                        //用于显示歌曲图片
                        this.audio.cover=this.$store.state.sre_src.url.mp3.img
                        //把this.$store.state.sre_src.url.mp3.name里面的歌曲名字设置到aplayer的artist数据中，
                        //用于显示歌手名字
                        this.audio.artist=this.$store.state.sre_src.url.mp3.name
                    }).catch(error=>{
                        console.log(error)
                    })
                }

            }
        },
        methods:{
            music_bth(id){
                this.$store.state.sre_src.url.id=id
                this.$store.state.sre_src.is=true
                setTimeout(()=>{
                    this.$store.state.sre_src.is=false
                },100)
            },
            music_in(){
                this.$router.push("/home")
                this.title=[]

            },
            music_geshou(){
                this.$router.push("/home/geshou")
                this.title=[]
            },
            music_gedan(){
                this.$router.push("/home/Popular recommendation")
                this.title=[]
            },
            music_gequku(){
                this.$router.push("/home/pai")
                this.title=[]
            }
        }

    }

</script>

<style scoped>
.music_header{
    width: 100%;
    background: black;
    color: #FFFFFF;
    text-align: center;
}
.music_header span{
    display: block;
}
.music_play{
    padding: 10px;
}
.music_play .music_ul{
    height: 620px;
     padding: 20px;
    background: black;
    box-shadow: 0px 0px 15px #99a9bf;
    border-left: 3px solid black;
    box-sizing: border-box;
}
.music_play .music_ul li{
      margin-top: 10px;
    /*background:#f8f8f8;*/
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    color: #f8f8f8;
    border-radius: 12px;
}
.music_play .music_ul li:nth-child(1){
    margin-top: -10px;
}
.music_play .music_ul li:hover{
    background: darkgray;
}
.music_play .play .mp3{
    position: absolute;
    width: 99%;
    left: 0;
    box-shadow: 0px 0px 15px #bbbbbb;
}
.music_footer{
    background: black;
    width: 100%;
    height: 87px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
    box-shadow: 0px 0px 15px azure;
}
    .music_on{
        position: absolute;
        right: 30px;
        top: 10px;
    }
.music_on .bth_on{
    display: block;
    width: 300px;
    margin: 0;
    border-radius: 0;
}








    </style>












