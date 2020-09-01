<template>
     <div style="margin: 10px auto">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>排行榜</span>

            <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
        </div>
        <div  class="car_0">
            <img :src="list[0][0].coverImgUrl" alt="" @click="bth_img1(list[0][0].id)">
            <img :src="list[0][1].coverImgUrl" alt="" @click="bth_img2(list[0][1].id)">
            <img :src="list[0][2].coverImgUrl" alt="" @click="bth_img3(list[0][2].id)">
            <img :src="list[0][3].coverImgUrl" alt="" @click="bth_img4(list[0][3].id)">
        </div>
    </el-card>
<!--         新歌榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>新歌榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_1">
                 <img :src="list[0][4].coverImgUrl" alt="" @click="bth_img5(list[0][4].id)">
                 <img :src="list[0][5].coverImgUrl" alt="" @click="bth_img6(list[0][5].id)">
                 <img :src="list[0][6].coverImgUrl" alt="" @click="bth_img7(list[0][6].id)">
                 <img :src="list[0][7].coverImgUrl" alt="" @click="bth_img8(list[0][7].id)">
                          </div>
         </el-card>
<!--         特色榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>特色榜</span>

                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
                          <div  class="car_2">
                              <img :src="list[0][8].coverImgUrl" alt="" @click="bth_img9(list[0][8].id)">
                              <img :src="list[0][9].coverImgUrl" alt="" @click="bth_img10(list[0][9].id)">
                              <img :src="list[0][10].coverImgUrl" alt="" @click="bth_img11(list[0][10].id)">
                              <img :src="list[0][11].coverImgUrl" alt="" @click="bth_img12(list[0][11].id)">
                          </div>
         </el-card>
<!--         全球榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>NJN榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
                          <div  class="car_3">
                              <img :src="list[0][12].coverImgUrl" alt="" @click="bth_img13(list[0][12].id)">
                              <img :src="list[0][13].coverImgUrl" alt="" @click="bth_img14(list[0][13].id)">
                              <img :src="list[0][14].coverImgUrl" alt="" @click="bth_img15(list[0][14].id)">
                              <img :src="list[0][15].coverImgUrl" alt="" @click="bth_img16(list[0][15].id)">
                          </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>JNKS榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_3">
                 <img :src="list[0][16].coverImgUrl" alt="" @click="bth_img17(list[0][16].id)">
                 <img :src="list[0][17].coverImgUrl" alt="" @click="bth_img18(list[0][17].id)">
                 <img :src="list[0][18].coverImgUrl" alt="" @click="bth_img19(list[0][18].id)">
                 <img :src="list[0][19].coverImgUrl" alt="" @click="bth_img20(list[0][19].id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>全球榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_3">
                 <img :src="list[0][20].coverImgUrl" alt="" @click="bth_img21(list[0][20].id)">
                 <img :src="list[0][21].coverImgUrl" alt="" @click="bth_img22(list[0][21].id)">
                 <img :src="list[0][22].coverImgUrl" alt="" @click="bth_img23(list[0][22].id)">
                 <img :src="list[0][23].coverImgUrl" alt="" @click="bth_img24(list[0][23].id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>NJSO榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_3">
                 <img :src="list[0][24].coverImgUrl" alt="" @click="bth_img25(list[0][24].id)">
                 <img :src="list[0][25].coverImgUrl" alt="" @click="bth_img26(list[0][25].id)">
                 <img :src="list[0][26].coverImgUrl" alt="" @click="bth_img27(list[0][26].id)">
                 <img :src="list[0][27].coverImgUrl" alt="" @click="bth_img28(list[0][27].id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>KOWH榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_3">
                 <img :src="list[0][28].coverImgUrl" alt="" @click="bth_img29(list[0][28].id)">
                 <img :src="list[0][29].coverImgUrl" alt="" @click="bth_img30(list[0][29].id)">
                 <img :src="list[0][30].coverImgUrl" alt="" @click="bth_img31(list[0][30].id)">
                 <img :src="list[0][31].coverImgUrl" alt="" @click="bth_img32(list[0][31].id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>BHW榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_3">
                 <img :src="list[0][32].coverImgUrl" alt="" @click="bth_img33(list[0][32].id)">
                 <img :src="list[0][33].coverImgUrl" alt="" @click="bth_img34(list[0][33].id)">
             </div>
         </el-card>
     </div>
</template>
<script>
    export default {
        name:"bang",
        data(){
            return{
                list:[],
                currentDate: new Date(),
                id:"",
                is:false
            }
        },
        mounted() {
            this.$http({
                url:"/toplist/detail"
            }).then(res=>{
                this.list.push(res.list)
            })
        }
        ,
        methods:{
            bth_img1(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path:"/home/pai",
                        query:{
                            t:Date.now()
                        }
                    })
                })
            },
            bth_img2(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path:"/home/pai",
                        query:{
                            t:Date.now()
                        }
                    })
                })
            },
            bth_img3(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img4(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                 this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img5(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
               this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img6(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                     this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img7(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img8(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img9(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img10(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img11(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img12(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img13(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img14(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img15(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img16(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img17(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img18(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img19(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img20(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img21(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img22(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                 this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img23(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img24(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img25(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                   this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img26(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                 this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img27(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img28(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img29(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                  this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img30(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                    this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img31(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                 this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img32(id){
                this.id=id
                this.$http({

                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                      this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            },
            bth_img33(id){
                this.id=id
                this.$http({
                    url:"/playlist/detail?id="+this.id
                }).then(res=>{
                     this.$store.state.pai.arr=[]
                    this.$store.state.pai.is=true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push("/home/pai")
                })
            }
        }
    }
</script>
<style scoped>
    img{
        width: 315px;
        cursor: pointer;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
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
        width: 1300px;
        margin: 10px auto;
    }
    .car_0{
        display: flex;
    }
</style>