<template>
    <ul>
        <li class="color">
            <router-link to="/home/Popular recommendation/Ppular_one">推荐歌单</router-link>
        </li>
        <li>
            <router-link to="/home/Popular recommendation/gedan">热门歌单分类</router-link>
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
        justify-content: center;
        line-height: 60px;
    }
    ul li{
        color: #FFFFFF;
        width: 100px;
        /*text-align: center;*/
        line-height: 60px;
        cursor: pointer;
        /*transition: 3s;*/
        border-left: 5px solid floralwhite;
        /*box-sizing: border-box;*/
    ;
    }
    ul li:nth-child(1){
        margin-left: 20px;
        border-left: none;
    }
    ul li:hover{
      border-bottom: 5px solid cornflowerblue;
    }
    li a{
        text-decoration: none;
        color: #FFFFFF;
    }


</style>