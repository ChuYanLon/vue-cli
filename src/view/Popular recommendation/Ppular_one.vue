
<template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%">
        <el-table-column  label="cover" width="300px" align="center">
            <template slot-scope="scope">
                <div class="block"><el-avatar shape="square" :size="50" :src="scope.row.coverImgUrl"></el-avatar></div>
            </template>
        </el-table-column>
        <el-table-column
                prop="id"
                label="歌单ID"
                width="300">
        </el-table-column>
        <el-table-column
                prop="name"
                label="歌单名"
                width="350">
        </el-table-column>
        <el-table-column
                prop="creator.nickname"
                label="歌单创建者"
                width="300"
           >
        </el-table-column>
        <el-table-column
                label="操作"
                width="210">
            <template slot-scope="scope">
                <el-button type="primary" @click="gedan_2_bth(scope.row)">获取歌单</el-button>
            </template>

        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData:[]
            }
        },
        mounted() {
            this.$http({
                url:"/related/playlist?id=2965239834"
            }).then(res=>{
               for (let i=0;i<res.playlists.length;i++){
                   this.tableData.push(res.playlists[i])
               }

            })
        },
        methods:{
            gedan_2_bth(val){
                this.$store.state.gedan_arr.id=""
                this.$store.state.gedan_arr.id=val.id
                this.$http({
                    url:"/playlist/detail?id="+val.id
                }).then(res=>{
                    this.$store.state.gedan_arr.arr=[]
                    this.$store.state.gedan_arr.arr.push(res.playlist)

                    this.$store.state.gedan_arr.is_is=true

                })
            }
        }
    }
</script>