<template>
    <div v-on:keypress.enter="src_bth">
        <span>|</span>
        <input type="text" class="text" style="height: 50px" v-model="src.src" placeholder="请输入歌手名字或者是mv的名字">
        <el-button type="primary" icon="el-icon-search" class="bth" @click="src_bth">搜索</el-button>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from "vuex"
    export default {
        name: "sre_src",
        computed: {
            ...mapGetters([
                "src"
            ])
        },
        methods: {
            ...mapActions([
                "src_bth"
            ])
        },
        mounted(){
          this.$http({
              url:"/search?keywords=古风"
          }).then(res=>{
             this.$store.state.sre_src.arr_mv=[]
              this.$store.state.sre_src.arr=[]
              for (let i=0;i<res.result.songs.length;i++){
                  if (res.result.songs[i].mvid!=0){
                      this.$store.state.sre_src.arr_mv.push(res.result.songs[i])
                  }else{
                      this.$store.state.sre_src.arr.push(res.result.songs[i])
                  }
              }
          })
        }
    }
</script>

<style scoped>
    div {
        position: relative;
        margin-left: 90px;
    }

    .text {
        border-radius: 12px 0px 0px 12px;
        margin-top: 3.5px;
        width: 300px;
        border: none;
        /*border: 1px solid #99a9bf;*/
        text-indent: 10px;
    }

    .bth {
        border-radius: 0px 10px 10px 0px;
        height: 50px;
        position: absolute;
        top: 3.5px;
        left: 230px;
       box-sizing: border-box;
        border: 1px solid floralwhite;
        font-size: 20px;
        background: url("../assets/image/my/timg.gif");
    }

    span {
        margin-right: 30px;
        color: #FFFFFF;
        position: absolute;
        left: -20px;
        top: -13px;
        font-size: 55px;
    }


</style>