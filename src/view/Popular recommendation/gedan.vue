
<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="类名">
                        <span>{{ props.row.name}}</span>
                    </el-form-item>
                    <el-form-item label="所属type">
                        <span>{{ props.row.type }}</span>
                    </el-form-item>
                    <el-form-item label="ID">
                        <span>{{ props.row.id }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="ID"
                prop="id">
        </el-table-column>
        <el-table-column
                label="分类名"
                prop="name">
        </el-table-column>
        <el-table-column
                label="创建分类时间"
                prop="createTime">
        </el-table-column>
        <el-table-column
                label="操作"
                width="200">
            <template slot-scope="scope">
                <el-button type="primary" @click="gedan_bth(scope.row)">获取精品歌单</el-button>
            </template>
        </el-table-column>
        <el-table-column
                label="操作"
                width="200">
            <template slot-scope="scope">
                <el-button type="primary" @click="gedan_0_bth(scope.row)">获取歌单</el-button>
            </template>
        </el-table-column>

    </el-table>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        data() {
            return {
                tableData:[],
                id:"",
                loading:true
            }
        },
        mounted() {
            this.$http({
                url:"/playlist/hot"
            }).then(res=>{
                console.log(res)
                for (let i=0;i<res.tags.length;i++){
                    this.tableData.push(res.tags[i])
                }
                 this.loading=false
            })
        },
        methods:{
            gedan(id){
                console.log(id)
                this.$store.state.gedan_arr.is=true
            },
            gedan_bth(val){
                this.$store.state.gedan_arr.is=true
                this.$store.state.gedan_arr.is=false
               this.$http({
                   url:"/top/playlist/highquality?cat="+val.name
               }).then(res=>{
                   this.$http({
                       url:"/playlist/detail?id="+res.playlists[0].id
                   }).then(res=>{
                       this.$store.state.gedan_arr.arr=[]
                       this.$store.state.gedan_arr.arr.push(res.playlist)
                       console.log(this.$store.state.gedan_arr.arr[0])
                       this.$store.state.gedan_arr.is=true
                   })
               })

            },
            gedan_0_bth(val){
                this.$store.state.gedan_arr.is=true
                this.$store.state.gedan_arr.is=false
                this.$http({
                    url:"/top/playlist?limit=100&order=new&cat="+val.name
                }).then(res=>{
                    this.$store.state.gedan_arr.arr=[]
                    for (let i=0;i<res.playlists.length;i++){
                        this.$store.state.gedan_arr.arr.push(res.playlists[i])
                    }
                    this.$store.state.gedan_arr.is=true
                    console.log(this.$store.state.gedan_arr.arr)
                })
            }
        }
    }
</script>