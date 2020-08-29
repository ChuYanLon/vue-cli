<template>
    <el-carousel :interval="4000" type="card" height="300px" style="margin-top: 20px">
        <el-carousel-item v-for="(value,i) in url[0]" :key="i">
            <img :src="value.picUrl" @click="bth(value.id)">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "lunbotu",
        data(){
            return{
             url:[]
            }
        },
        mounted() {
            this.$http({
                // url:"/banner"
                url:"/personalized/newsong"
            }).then(res=>{
                this.url.push(res.result)
                // console.log(this.url)
                console.log(res.result)
            })
        },
        methods:{
            bth(id){
                this.$store.state.sre_src.url.id=id
                console.log(this.$store.state.sre_src.url.id)
                this.$store.state.sre_src.is=true
                this.$store.state.sre_src.url.is=true
                setTimeout(()=>{
                    this.$store.state.sre_src.is=false
                    console.log( this.$store.state.sre_src.is)
                },200)
                this.$router.push("/music player")
            }
        },
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>