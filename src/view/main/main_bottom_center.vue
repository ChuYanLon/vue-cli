<template>
    <el-card class="box-card" style="width: 100%">
        <div slot="header" class="clearfix">
            <span>最新专辑</span>
        </div>
        <el-carousel height="500px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="(value,i) in list[0]" :key="i">
                <img :src="value.picUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </el-card>
</template>

<script>
    export default {
        name: "main_botton_center",
        data(){
            return{
             list:[]
            }
        },
        mounted() {
            this.$http({
                url:"/album/newest"
            }).then(res=>{
                console.log(res)
                this.list.push(res.albums)
            })
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
    }
</style>