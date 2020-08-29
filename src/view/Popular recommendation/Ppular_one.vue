<template>
    <el-container style="height: 600px">
        <el-aside width="50%" style="background: #409EFF">
            <el-main style="background: #d3dce6;height: 300px">
                我是第一层
            </el-main>
            <el-main >
                我是第二层
            </el-main>
        </el-aside>
        <el-container>
            <el-aside style="background: green" width="100%">
                <el-main style="background: #d3dce6;height: 300px">
                    我是第一层
                </el-main>
                <el-main >
                    我是第二层
                </el-main>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Ppular_one"
    }
</script>

<style scoped>

</style>