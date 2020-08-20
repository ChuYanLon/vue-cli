<template>
    <div>
        <h2>post网络请求测试...</h2>
    </div>
</template>

<script>
    export default {
        name: "post",
        mounted() {
            this.$axios.post("https://api.uomg.com/api/rand.qinghua",{
                format:"json"
            }).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>

</style>