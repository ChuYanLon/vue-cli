<template>
    <el-container class="tem">
        <el-main class="tem_main">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="视频地址">
                    <el-input v-model="form.name" style="width: 200px"></el-input>
                </el-form-item>
                <el-button type="primary" @click="onSubmit" class="tem_bth">立即解析</el-button>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "tem",
        data(){
            return{
                form:{
                    name:""
                }
            }
        },
        methods:{
            onSubmit(){
                let url=`https://tool.bitefu.net/video/?url=http://${this.form.name}&type=1`
                window.open(url)
                this.form.name=""
            }
        }
    }
</script>

<style scoped>
.tem{
    margin: 10px auto;
}
img{
    width: 100%;
    height: 100%;
}
.tem_bth{
    margin-left: 90px
}
@media screen and (max-width: 800px){
    .tem{
        width: 100%;
        margin: 10px auto;
    }
    .tem .tem_main{
        width: 100px;
        margin-left: -30px;
    }
    .tem_bth{
        margin-left: 0px
    }
}
</style>