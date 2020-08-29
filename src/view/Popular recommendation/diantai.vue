<template>
    <div>
        {{}}
    </div>
</template>

<script>
    export default {
        name: "dantai",
        mounted() {
            this.$http({
                url:"/dj/program/detail?id=2068933306"
            }).then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>