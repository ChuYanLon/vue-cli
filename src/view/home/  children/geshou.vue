<template>
    <div style="margin-left: 47px">
        <el-table style="width: 100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  v-loading="this.$store.state.mv_src.loading"
        >

            <el-table-column  label="头像" width="300px" align="center">
                <template slot-scope="scope">
                    <div class="block"><el-avatar :size="80" :src="scope.row.img1v1Url"></el-avatar></div>
                </template>
            </el-table-column>
            <el-table-column label="歌手" prop="name" width="400" align="center">
            </el-table-column>
            <el-table-column label="歌手id" prop="id" width="400" align="center">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="150" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" @click="mv_left_bth({
                        img:scope.row
                    })">播放歌手全部歌曲</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="170" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" @click="mv_right_bth({
                        img:scope.row
                    })">
                        点击播放MV
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        {{un}}
        {{n}}
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="userList.length">
        </el-pagination>
    </div>

</template>
<script>
    export default {
        name: "mv-left_li",
        data() {
            return {
                currentPage: 1,
                pagesize: 10,
                userList:[],
                img1v1Url:[],
                id:""
            }
        },
        methods: {
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            mv_right_bth({img}){
                this.$store.state.mv_src.arr=[]
                this.$store.state.mv_src.mp4.url=""
                this.$store.state.mv_src.mp4.img=""
                this.$store.state.mv_src.mp4.title=""
                this.$store.state.mv_src.mp4.name=""
                this.id=img.id
                this.$http({
                    url: "/artist/mv?id=" + this.id
                }).then(res => {
                    if (res.mvs.length>0) {
                        this.$store.state.sre_src.is=true
                        this.$store.state.mv_src.mp4.is=true
                         this.$store.state.mv_src.arr=[]
                          this.$store.state.mv_src.arr.push(res.mvs)
                          this.$store.state.mv_src.mp4.id=this.id
                           this.$router.push("/Video playback")
                        // console.log(  this.$store.state.mv_src.arr)
                        console.log(this.$store.state.mv_src.arr)
                        setTimeout(()=>{
                            this.$store.state.mv_src.mp4.is=false
                            this.$store.state.sre_src.is=false
                        },500)
                    }else{
                        alert("抱歉没有MV")
                    }
                    console.log(res)
                })

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
                    url:"/artist/top/song?id="+this.id
                }).then(res=>{
                    this.$store.state.sre_src.is=true
                    for (let i=0;i<res.songs.length;i++){
                        this.$store.state.sre_src.arr.push(res.songs[i])
                    }

                    this.$router.push("/music player")
                    console.log(res.songs)
                    console.log( this.$store.state.sre_src.arr[0])
                })
            }
        },
        mounted() {
            this.$store.state.mv_src.loading=true
            this.$http({
                url:"/top/artists?offset=0&limit=100"
            }).then(res=>{
                // this.userList.push(res.artists[0])
                for (let i=0;i<res.artists.length;i++){
                      this.userList.push(res.artists[i])
                }
                this.$store.state.mv_src.loading=false
            })
        }
    }
</script>

<style scoped>
    .el-table-row .el-table_2_column_7 is-center .cell{
        background: black;
    }


</style>