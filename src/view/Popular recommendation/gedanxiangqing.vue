<template>
    <div style="width: 100%" >
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
        <el-container style=" border: 1px solid #eee">
            <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title">{{this.$store.state.gedan_arr.arr[0].name}}</template>
                        <el-menu-item index="1-1">
                            <ul>
                                <li v-for="(value,i) in this.$store.state.gedan_arr.arr[0].trackIds" :key="i"
                                    @click="jin_bth(value.id)"
                                >
                                    {{value.id}}
                                </li>
                            </ul>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>

                    <img :src="this.$store.state.gedan_arr.arr[0].coverImgUrl" alt="">
                    <h2 style="width: 100%;background: black;color: #f8f8f8;line-height: 50px;text-indent: 2em">{{this.$store.state.gedan_arr.arr[0].description}}</h2>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        methods:{
            jin_bth(id){
                this.$store.state.sre_src.arr=[]
                this.$store.state.sre_src.is==true
                this.$store.state.sre_src.is=true
                this.$store.state.sre_src.url.id=id
                setTimeout(()=>{
                    this.$store.state.sre_src.is==false
                    this.$store.state.sre_src.is=false
                },500)
                this.$store.state.sre_src.arr=[]
                for (let i=0;i<this.$store.state.gedan_arr.arr[0].trackIds.length;i++){
                    this.$store.state.sre_src.arr.push(this.$store.state.gedan_arr.arr[0].trackIds[i])
                    console.log(this.$store.state.gedan_arr.arr[0].trackIds[i])
                }
                console.log( this.$store.state.sre_src.arr)
                this.$router.push("/music player")
            },
            goBack() {
                this.$router.push("/home")

            },
        },
        data(){
            return{
                id: "",
            }
        }
    }
</script>

<style scoped>
    ul li{
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
    img{
        margin-bottom: 20px;
        width: 100%;
    }
</style>