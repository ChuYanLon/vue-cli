
<template>
    <el-tabs type="border-card" style="width: 100%">
        <el-tab-pane>
            <span slot="label">
                <i class="el-icon-date"></i>推荐歌单</span>
            <Ppular_one></Ppular_one>
        </el-tab-pane>
        <el-tab-pane label="歌单分类">
            <gedan></gedan>
        </el-tab-pane>
        <el-tab-pane label="请选择歌单" v-if="this.$store.state.gedan_arr.is">
            <xuanze></xuanze>
        </el-tab-pane>
        <el-tab-pane label="精品歌单详情" v-if="this.$store.state.gedan_arr.is_is">
            <gedanxinagqing></gedanxinagqing>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import  gedanxinagqing from "../../Popular recommendation/gedanxiangqing";
    import gedan from "../../Popular recommendation/gedan";
    import xuanze from "../../Popular recommendation/xuanze";
    import Ppular_one from "../../Popular recommendation/Ppular_one";
    export default {
        components:{
            gedanxinagqing,
            gedan,
            xuanze,
            Ppular_one
        }
    }
</script>