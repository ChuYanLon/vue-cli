<template>
    <div>
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>推荐影片</span>
            <el-button style="float: right; padding: 3px 0" type="text">{{newdata}}</el-button>
        </div>
        <el-table
                :data="tableData[0].filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"
        >
            <el-table-column  label="cover"  align="center">
                <template slot-scope="scope">
                    <div class="block"><el-avatar shape="square" :size="50" :src="scope.row.pic"></el-avatar></div>
                </template>
            </el-table-column>
            <el-table-column
                    label="片名"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="画质"
                    prop="label">
            </el-table-column>
            <el-table-column
                    label="类别"
                    prop="type">
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            :t="scope.row"
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
            </el-table-column>
            <el-table-column
                    width="200">
                <template slot-scope="scope">
                    <el-button type="primary" @click="tab_man(scope.row)">获取歌单</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    </div>
</template>

<script>
    import http from "../api";
    export default {
        name: "tab_man",
        methods: {
            goBack() {
              this.$router.push("/home")
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            tab_man(val){
                console.log(val)
                let url=`/api/vatfs/resource_site_collect/getVDetail?vid=`+val.vid
                http({
                    url:url
                }).then(res=>{
                    this.$store.state.mp4.title=""
                    this.$store.state.mp4.name=""
                    this.$store.state.mp4.img=""
                    this.$store.state.mp4.arr=[]
                    this.$store.state.mp4.title=res.data.data.name
                    this.$store.state.mp4.name=res.data.data.label
                    this.$store.state.mp4.img=res.data.data.pic
                    this.$store.state.mp4.arr.push(res.data.data.playUrl)
                    this.$store.state.mp4.is=true
                    setTimeout(()=>{
                        this.$store.state.mp4.is=false
                    },100)
                    console.log(this.$store.state.mp4.arr)
                    this.$router.push("/home/video")
                })

            }
        },
        data() {
            return {
                t:[],
                tableData: [],
                search: '',
                newdata:new Date()
            }
        },
        mounted() {
            setTimeout(()=>{
                let url=`/api/vatfs/resource_site_collect/search?per_page=500&page=1`
                http({
                    url:url
                }).then(res=>{
                    this.tableData.push(res.data.data.data)
                })
            },1000)
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
        width: 1000px;
        margin: 20px auto 0;
    }
</style>