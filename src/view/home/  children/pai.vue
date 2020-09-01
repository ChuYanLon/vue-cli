<template>
    <div style="width: 100%" >
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>榜单</template>
                            <el-menu-item index="1-1">
                                {{tableData[0][0].name}}
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <el-table :data="tableData[1].slice((currentPage-1)*pagesize,currentPage*pagesize)">
                        <el-table-column  label="cover" width="300px" align="center">
                            <template slot-scope="scope">
                                <div class="block"><el-avatar shape="square" :size="50" :src="scope.row.al.picUrl"></el-avatar></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="al.id" label="ID">
                        </el-table-column>
                        <el-table-column prop="al.name" label="歌曲">
                        </el-table-column>
                        <el-table-column prop="ar[0].name" label="歌手">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="200">
                            <template slot-scope="scope">
                                <el-button type="primary" @click="pai_bth(scope.row)">播放{{nu}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData[1].length">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "pai",
        methods: {
            goBack() {
                this.$router.push("/home/bang")

            },
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
            pai_bth(val) {
                this.id = ""
                this.id = val.id
                this.$store.state.sre_src.arr=[]
                this.$store.state.sre_src.url.is = true //把请求歌曲地址的打开
                this.$store.state.sre_src.url.id = this.id //把当前歌曲id传递到中心数据,然后right_top组件里面的计算属性察觉到//歌曲请求地址已经打开，然后它就开始发送axios请求
                this.$store.state.sre_src.is = true //把请求歌曲详情打开
                setTimeout(() => {
                    this.$store.state.sre_src.is = false   //设定毫秒定时器把，上一层开启的 歌曲请求地址axios 关闭
                }, 100)
                this.$router.push("/music player")
                console.log(val)
                for (let i=0;i<this.tableData[1].length;i++){
                    this.$store.state.sre_src.arr.push(this.tableData[1][i])
                }
            }

        },
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pagesize: 5,
                id: "",
                hackReset:true
            }
        },
        mounted() {
            this.tableData.push(this.$store.state.pai.arr)
            for (let i = 0; i < this.$store.state.pai.arr.length; i++) {
                this.tableData.push(this.$store.state.pai.arr[0].tracks)
            }
            console.log(this.tableData[1][0].name)
        },
    }
</script>

<style scoped>
</style>