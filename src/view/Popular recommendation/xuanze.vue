
<template>
    <div>
    <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%"
    >

        <el-table-column  label="cover" width="300px" align="center">
            <template slot-scope="scope">
                <div class="block"><el-avatar shape="square" :size="50" :src="scope.row.coverImgUrl"></el-avatar></div>
            </template>
        </el-table-column>
        <el-table-column
                prop="id"
                label="歌单ID"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="歌单创建者"
                width="180">
        </el-table-column>
        <el-table-column
                prop="description"
                label="作者有话说">
        </el-table-column>
        <el-table-column
                label="操作"
                width="200">
            <template slot-scope="scope">
                <el-button type="primary" @click="gedan_1_bth(scope.row)">获取歌单{{nu}}</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
    </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:this.$store.state.gedan_arr.arr,
                currentPage: 1,
                pagesize: 10,
            }
        },
        methods:{
            gedan_1_bth(val){
                this.$store.state.gedan_arr.id=""
                this.$store.state.gedan_arr.id=val.id
                this.$http({
                    url:"/playlist/detail?id="+val.id
                }).then(res=>{
                    this.$store.state.gedan_arr.arr=[]
                    this.$store.state.gedan_arr.arr.push(res.playlist)
                    console.log(this.$store.state.gedan_arr.arr[0])
                    this.$store.state.gedan_arr.is_is=true
                })
            },
            //    初始化每页数据
            handleSizeChange(size) {
                this.pagesize = size
            },
            //    点击第几页
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage
            },
        }
    }
</script>