<template>
     <div style="margin: 10px auto"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
     >
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>排行榜</span>

            <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
        </div>
        <div  class="car_0" v-for="(value,i) in this.list[0].slice(0,4)" :key="i">
            <img :src="value.coverImgUrl" alt="" @click="bth_img1(value.id)">
        </div>
    </el-card>
<!--         新歌榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>新歌榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(4,8)" :key="i">
                 <img :src="value.coverImgUrl" alt="" @click="bth_img2(value.id)">
                          </div>
         </el-card>
<!--         特色榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>特色榜</span>

                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
                          <div  class="car_0" v-for="(value,i) in this.list[0].slice(8,12)" :key="i">
                              <img :src="value.coverImgUrl" alt="" @click="bth_img3(value.id)">
                          </div>
         </el-card>
<!--         全球榜-->
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>NJN榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
                          <div  class="car_0" v-for="(value,i) in this.list[0].slice(12,16)" :key="i">
                              <img :src="value.coverImgUrl" alt="" @click="bth_img4(value.id)">
                          </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>JNKS榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(16,20)" :key="i">
                 <img :src="value.coverImgUrl" alt="" @click="bth_img5(value.id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>全球榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(20,24)" :key="i">
                 <img :src="value.coverImgUrl" alt="" @click="bth_img6(value.id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>NJSO榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(24,28)" :key="i">
                 <img :src="value.coverImgUrl" alt="" @click="bth_img7(value.id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>KOWH榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(28,32)" :key="i">
                 <img :src="value.coverImgUrl" @click="bth_img8(value.id)">
             </div>
         </el-card>
         <el-card class="box-card">
             <div slot="header" class="clearfix">
                 <span>BHW榜</span>
                 <el-button style="float: right; padding: 3px 0" type="text">{{currentDate}}</el-button>
             </div>
             <div  class="car_0" v-for="(value,i) in this.list[0].slice(32,34)" :key="i">
                 <img :src="value.coverImgUrl" alt="" @click="bth_img9(value.id)">
             </div>
         </el-card>
     </div>
</template>
<script>
    export default {
        name: "bang",
        data() {
            return {
                list: [],
                currentDate: new Date(),
                id: "",
                is: false,
                loading:true
            }
        },
        mounted() {
            this.$http({
                url: "/toplist/detail"
            }).then(res => {
                this.list.push(res.list)
                this.loading=false
            })
        }
        ,
        methods: {
            bth_img1(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }

                    })

                })
                console.log(id)
            },
            bth_img2(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img3(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img4(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img5(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img6(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img7(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img8(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
            bth_img9(id){
                this.id = id
                this.$http({
                    url: "/playlist/detail?id=" + this.id
                }).then(res => {
                    this.$store.state.pai.arr = []
                    this.$store.state.pai.is = true
                    this.$store.state.pai.arr.push(res.playlist)
                    this.$router.push({
                        path: "/home/pai",
                        query: {
                            t: Date.now()
                        }
                    })
                })
                console.log(id)
            },
        },
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
    .car_0 img{
        float: left;
    }
</style>