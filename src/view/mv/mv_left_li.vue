<template>
    <div>
        <el-table style="width: 100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  v-loading="this.$store.state.mv_src.loading"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
        >
        <el-table-column label="MV名字" prop="name" width="500" align="center">
        </el-table-column>
            <el-table-column label="演唱者" prop="artistName" width="400" align="center">
            </el-table-column>
            <el-table-column label="视频ID" prop="id" width="400" align="center">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <el-button type="primary" @click="mv_left_bth({
                    id:scope.row.id,
                    img:scope.row.cover,
                    title:scope.row.name,
                    name:scope.row.artistName
                    })">播放</el-button>
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
            }
        },
        methods: {
            mv_left_bth({id,img,title,name}) {
                this.$store.state.sre_src.arr=[]
                this.$store.state.sre_src.url.mp3.name=""
                this.$store.state.sre_src.url.mp3.title=""
                this.$store.state.sre_src.url.mp3.img=""
                this.$store.state.sre_src.url.mp3.url=[]
                this.$store.state.mv_src.mp4.name = name
                this.$store.state.mv_src.mp4.id = id
                this.$store.state.mv_src.mp4.title = title
                this.$store.state.mv_src.mp4.img = img
                this.$store.state.mv_src.mp4.is = true
                setTimeout(() => {
                    this.$store.state.mv_src.mp4.is = false
                }, 100)

                this.$router.push("/Video playback")
            },
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            bth(){
                console.log(this.m)
            },

        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            un(){
                if (this.$store.state.mv_src.is) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.userList=[]
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    // this.$store.state.mv_src.loading=false
                    if (this.$store.state.mv_src.arr.length>0) {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        // this.userList.push(this.$store.state.mv_src.arr[0])
                        for (let i=0;i<this.$store.state.mv_src.arr[0].length;i++){
                            let uselist=this.$store.state.mv_src.arr[0][i]
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            this.userList.push(uselist)

                        }
                    }
                }
            },
            // eslint-disable-next-line vue/return-in-computed-property
            n(){
                if (this.$store.state.mv_src.isfist){
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.$store.state.mv_src.loading=true
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.userList=[]
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    for (let i=0;i<this.$store.state.mv_src.arr[0].length;i++){
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.userList.push( this.$store.state.mv_src.arr[0][i])
                    }
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.$store.state.mv_src.loading=false
                }
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.$store.state.mv_src.isfist=false
            }
        },
    }
</script>

<style scoped>
.el-table-row .el-table_2_column_7 is-center .cell{
    background: black;
}
























</style>