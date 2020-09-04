<template>
    <el-container style="display: block">
        <el-card class="box-card" v-for="(value,i) in tableData[0]" :key="i">
            <div slot="header" class="clearfix">
                <span>{{value.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">{{value.id}}</el-button>
            </div>
            <el-table
                    :data="value.data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="频道"
                        width="300"
                        style="margin-left: 20px"
                        >
                </el-table-column>
                <el-table-column
                        label="操作"
                      >
                    <template slot-scope="scope">
                        <el-button type="primary" @click="main_1_bth(scope.row)">观看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pagesize"
                    layout="total, prev, pager, next"
                    :total="value.data.length">
            </el-pagination>
        </el-card>
    </el-container>
</template>

<script>
    import http from "../api";

    export default {
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pagesize: 5,
            }
        },
        mounted(){
            http({
                url:"/plugin/eyunzhu_vatfs_api/api/getLiveSource"
            }).then(res=>{
                this.tableData.push(res.data.data)
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
            main_1_bth(val){
                let mp=`https://tool.bitefu.net/video/?url=${val.url}&type=1`
                window.open(mp)
            }
        }
    }
</script>

<style scoped>
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 600px;
        margin: 10px auto 0;
    }
    @media screen and (max-width: 800px){
        .box-card {
            width: 400px;
            margin: 10px auto 0;
            margin-left: -13px;
        }
    }
















</style>