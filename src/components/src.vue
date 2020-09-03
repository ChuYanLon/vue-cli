<template>
   <el-container  class="src"  v-on:keypress.enter="bth">
       <el-input v-model="input" placeholder="请输入电影名字"></el-input>
       <el-button type="primary" icon="el-icon-search" class="bth" @click="bth">搜索</el-button>
       {{text}}
   </el-container>
</template>

<script>
  import http from "../api";
    export default {
        name: "src",
        data(){
            return{
                input:""
            }
        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            text(){
                if (this.$store.state.is==true){
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                      this.$store.state.mp4.id=this.$store.state.arr[0].data[0].vid
                    let url=`/api/vatfs/resource_site_collect/getVDetail?vid=`+this.$store.state.mp4.id
                    // eslint-disable-next-line vue/no-async-in-computed-properties
                    http({
                        url:url
                    }).then(res=>{
                        this.$store.state.mp4.arr=[]
                        this.$store.state.mp4.name=""
                        this.$store.state.mp4.title=""
                        this.$store.state.mp4.arr.push(res.data.data.playUrl)
                        this.$store.state.mp4.name=res.data.data.name
                        this.$store.state.mp4.title=res.data.data.label
                    })
                }
            }
        },
        methods:{
          bth(){
              let url=`/api/vatfs/resource_site_collect/search?kw=${this.input}&per_page=100&page=1`
              http({
                  url:url
              }).then(res=>{
                       if (res.data.data.total!=0){
                           this.$store.state.arr=[]
                           this.$store.state.arr.push(res.data.data)
                           this.$store.state.is=true
                           setTimeout(()=>{
                               this.$store.state.is=false
                           },100)
                           this.$router.push("/home/temp table")
                       }else{
                           alert("暂时没有资源")
                           this.input=""
                       }


              })
          }
        },
    }
</script>


<style scoped>
.src{
   width: 600px;
    margin: 0 auto;
    /*margin-top: 100px;*/
    position: relative;
}
.bth{
    border-radius: 0 ;
    position: absolute;
    top: 0px;
    right: 119px;
    height: 40px;
}
.tab_ic{
    position: fixed;
    left: 0;
    top: 259px;
}
@media screen and (max-width: 800px){
    .src{
        width: 100%;
        margin: 0 auto;
        /*margin-top: 100px;*/
        position: relative;
    }
    .bth{
        border-radius: 0 ;
        position: absolute;
        top: 0.5px;
        right: 116px;
    }
}















</style>