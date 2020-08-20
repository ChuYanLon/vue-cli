<template>
    <div>
        <h2>网络请求并发处理...</h2>
    </div>
</template>

<script>
 import axios from "axios"
    export default {
        name: "all",
        mounted() {
           axios.all([
               axios.get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json"),
               axios.get("https://api.uomg.com/api/rand.music?sort=飙升榜&format=json")
           ]).then(
               axios.spread((one,two)=>{
                   console.log(one)
                   console.log(two)
               })
           ).catch(error=>{
               console.log(error)
           })
        }
    }
</script>

<style scoped>

</style>