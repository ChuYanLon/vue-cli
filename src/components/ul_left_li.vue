<template>
    <ul>
        <h1 style="text-align: center;line-height: 50px;font-family: 华文琥珀;color: darkgreen;letter-spacing: 10px;
            font-size: 30px;
           ">音频</h1>

        <!--        此处用for循环把所有的歌曲打印出来，点击事件传递当前歌曲的id，用于axios请求-->
        <li v-for="(value,i) in this.$store.state.sre_src.arr" :key="i"
       @click="ul_left_li_bth(value.id)"
       >
          {{value.name}}
        </li>

    </ul>
</template>

<script>

  export default {
      name:"ul_left_li",
      data(){
          return{
              //歌曲id
              id:""
          }
      },
      methods:{
        ul_left_li_bth(i){
             this.id=i//把上面传递传来的当前点击的歌曲id设置到this.data.id
            this.$store.state.sre_src.url.is=true //把请求歌曲地址的打开
            this.$store.state.sre_src.url.id=this.id //把当前歌曲id传递到中心数据,然后right_top组件里面的计算属性察觉到//歌曲请求地址已经打开，然后它就开始发送axios请求
            this.$store.state.sre_src.is=true //把请求歌曲详情打开
            setTimeout(()=>{
                this.$store.state.sre_src.is=false   //设定毫秒定时器把，上一层开启的 歌曲请求地址axios 关闭
            },100)
            this.$router.push("/music player")
            console.log(this.id)
        },
      }
  }
</script>

<style scoped>
 ul li{
     text-indent: 30px;
     display: block;
     line-height: 30px;
     padding: 10px;
     font-size: 15px;
     color: #f8f8f8;
     cursor: pointer;
 }


















</style>
