<template>
    <el-container id="my_cont">
        <el-header class="my_header">
            <el-row class="demo-avatar demo-basic">
                <el-col :span="23">
                    <div class="demo-basic--circle">
                        <div class="block"><el-avatar :size="100" :src="this.$store.state.form.imgurl"></el-avatar></div>
                    </div>
                </el-col>
            </el-row>
            <hr style="margin-left: -35px">
        </el-header>
        <el-main class="my_main">
           <el-form ref="form" label-width="55px" class="my_main_input">
               <el-form-item label="用户名">
                   <el-input :value="this.$store.state.form.name" readonly></el-input>
               </el-form-item>
               <el-form-item label="账号">
                   <el-input :value="this.$store.state.form.text" readonly></el-input>
               </el-form-item>
               <el-form-item label="密码">
                   <el-input :value="this.$store.state.form.md5" readonly></el-input>
               </el-form-item>
               <el-form-item>
                   <el-button type="primary" class="button" @click="restbth">退出登录</el-button>
               </el-form-item>
           </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "my",
        data(){
            return{
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                sizeList: ["large"]
            }
        },
        methods:{
            restbth(){
                this.$store.state.form.is=false
                this.$store.state.form.text=""
                this.$store.state.form.pass=""
                this.$store.state.form.name=""
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
  #my_cont{
      width: 500px;
      box-shadow: 0px 0px 20px #d3dce6;
      background: url("../../../assets/image/my/timg.gif");
  }
    .my_header{
        width: 400px;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
        margin-top: 20px;
        text-indent: -31px;
    }
   .my_main{
       background: #d3dce6;
       width: 400px;
       /*height: 280px;*/
       margin-top: 80px;
       margin-left: 550px;
       margin-bottom: 20px;
       box-shadow: 0px 0px 15px aliceblue;
   }
    .my_main_input{
        padding: 30px;
    }
  .button{
    width: 281px;
      margin-left: -35px;
  }
</style>