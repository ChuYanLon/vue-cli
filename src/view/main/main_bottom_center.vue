<template>
    <el-card class="box-card" style="width: 100%">
        <div slot="header" class="clearfix">
            <span>最新专辑</span>
        </div>
        <el-carousel height="800px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="(value,i) in list[0]" :key="i">
                <img :src="value.picUrl" alt="" @click="bth(value)">
            </el-carousel-item>
        </el-carousel>
    </el-card>
</template>

<script>
    export default {
        name: "main_botton_center",
        data(){
            return{
             list:[],
                id:""
            }
        },
        mounted() {
            this.$http({
                url:"/album/newest"
            }).then(res=>{
                console.log(res)
                this.list.push(res.albums)
            })
        },
        methods:{
            bth(val){
                this.$http({
                    url:"/playlist/detail?id="+val.id
                }).then(res=>{
                    this.$store.state.gedan_arr.arr=[]
                    this.$store.state.gedan_arr.arr.push(res.playlist)
                    console.log(this.$store.state.gedan_arr.arr[0])
                    this.$store.state.gedan_arr.is=true
                    this.$router.push("/home/Popular recommendation/Ppular_one")
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
        width: 100%;
        margin: 0 auto;
    }
    img{
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
</style>