<template>
    <div class="div"  v-on:keypress.enter="bth">
        <h3 class="h3">网易云音乐登录界面</h3>
       <el-form ref="form" :model="form" label-width="80px" class="form" >
           <el-form-item label="账户" prop="text">
               <el-input v-model="form.text" type="text"></el-input>
           </el-form-item>
           <el-form-item label="密码" prop="pass">
               <el-input v-model="form.pass" type="password"></el-input>
           </el-form-item>
           <el-form-item label="用户名" prop="name">
               <el-input v-model="form.name"></el-input>
           </el-form-item>
           <el-form-item label="头像地址" prop="imgurl">
               <el-input v-model="form.imgurl"></el-input>
           </el-form-item>
           <el-form-item>
               <el-button type="primary" class="button" @click="bth">登录</el-button>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from "vuex"
    export default {
        name: "logn",
        computed:{
            ...mapGetters([
               "form"
            ])
        },
        methods:{
            ...mapActions([
                "bth"
            ]),
        }
    }
</script>

<style scoped>
.div{
    width: 500px;
  border: 1px solid aliceblue;
    margin: 180px auto;
    padding: 50px;
    border-radius: 13px;
    box-shadow: 0px 0px 12px silver;
}
    div .form{
        width: 500px;
    }
    .form .button{
        width: 300px;
        margin-left:55px;
    }
    .div .h3{
        text-align: center;
       margin-bottom: 20px;
        font-weight: bold;
    }











</style>