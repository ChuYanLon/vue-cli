<template>
    <ul>
        <li class="color">
            <router-link to="/home/Popular recommendation/Ppular_one">推荐</router-link>
        </li>
        <li>
            <router-link to="/home/Popular recommendation/gedan">热门歌单</router-link>
        </li>
        <li>
            <router-link to="/home/Popular recommendation/diantai">热门电台</router-link>
        </li>
        <li>
            <router-link to="/home/Popular recommendation/geshou">热门歌手</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Popular_logn"
    }
</script>

<style scoped>
    ul{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        /*background: #FFFFFF;*/
    }
    ul li{
        color: #FFFFFF;
        width: 300px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        transition: 1s
    ;
    }
    ul li:nth-child(1){
        margin-left: 20px;
    }
    ul li:hover{
        background:#409EFF;
    }
    .color{
        background:#409EFF;
    }
    li a{
        text-decoration: none;
        color: #FFFFFF;
    }


</style>