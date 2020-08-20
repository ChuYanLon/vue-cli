<template>
    <div>
        <h3>get网络请求测试...</h3>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            this.$axios.get("https://api.uomg.com/api/rand.qinghua",{
                params:{
                    format:"json"
                }
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