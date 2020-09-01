<template>
    <el-card class="box-card" style="margin-top: 10px;margin-bottom: 10px">
        <div slot="header" class="clearfix">
            <span>推荐音乐</span>
        </div>
        <el-table style="width: 100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  v-loading="loading"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
        >
            <el-table-column label="歌曲" prop="name">
            </el-table-column>
            <el-table-column label="歌手" prop="artists[0].name" >
            </el-table-column>
            <el-table-column label="歌手id" prop="id">
            </el-table-column>
            <el-table-column
                    label="操作"
                  >
                <template slot-scope="scope">
                    <el-button type="primary" @click="mv_left_bth({
                        img:scope.row
                    })">
                        播放
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20,30, 40,50,60,70,80]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="userList.length">
        </el-pagination>
    </el-card>
</template>

<script>
    export default {
        name: "main_top_left",
        data(){
            return{
                loading:true,
                userList:[],
                currentPage: 1,
                pagesize: 30,
                id:""
            }
        },
        mounted() {
            this.$http({
                url:"/top/song/?type=0"
            }).then(res=>{
                for (let i=0;i<res.data.length;i++){


                        this.userList.push(res.data[i])

                }
                this.loading=false
                console.log(this.userList)
            })
        },
        methods:{
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            mv_left_bth({img}){
                this.id=""
                this.id=img.id
                this.$store.state.sre_src.arr=[]
                this.$store.state.sre_src.url.mp3.name=""
                this.$store.state.sre_src.url.mp3.title=""
                this.$store.state.sre_src.url.mp3.img=""
                this.$store.state.sre_src.url.mp3.url=[]
                this.$http({
                    url:"/song/detail?ids="+img.id
                }).then(res=>{
                    this.$store.state.sre_src.is=true
                    for (let i=0;i<res.songs.length;i++){
                        this.$store.state.sre_src.arr.push(res.songs[i])
                    }
                    console.log(this.$store.state.sre_src.arr)
                    this.$router.push("/music player")
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
        width: 95%;
        margin: 0 auto;
    }
</style>