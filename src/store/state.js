
export default {
    //登录数据
    form: {
        text: "123456",
        pass: "123456",
        name: "巧克力",
        md5:"**********",
        is:false,
        alter:false,
        imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598506757196&di=54583eb3479cc9a5e2ff2f2407138758&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F101%2F70319%2Fe9c38924bad0ac5d_1440x900.jpg"
    },
    //歌曲
    sre_src: {
        //搜索内容
        src:"古风",
        //搜索到的内容
        arr:[],//搜索到的歌曲==>data
        arr_mv:[],
        url:{
            //歌曲id
            id:"",//歌曲id搜索那栏得到的数据里面的id属性，通过id可以查询到歌曲的路径-图片-歌手等!
            mp3:{//通过axios请求把歌曲的地址，图片，歌手，歌曲名字请求过来，然后分配给mp3里面的属性
                url:[],
                img:"",
                name:"",
                title:""
            },
            //请求歌曲地址
            //当前is是用于重复请求axios,可以在计算属性里面用if判断，如果是ture就执行axios请求
            //需要请求数据的地方只需要把当前这个设置为ture就可以发送axios请求，然后后面再设置一个
            //定时器，1毫秒后再把此is设置为false，通过如此设置就可以重复发送axios请求
            is:false
        },
        //请求歌曲详情
        //当前is是用于重复请求axios,可以在计算属性里面用if判断，如果是ture就执行axios请求
        //需要请求数据的地方只需要把当前这个设置为ture就可以发送axios请求，然后后面再设置一个
        //定时器，1毫秒后再把此is设置为false，通过如此设置就可以重复发送axios请求
        is:false
    },
//    Mv
  mv_src:{
        arr:[],//视频数据
        mp4:{
            id:"",
            url:"",//地址，
            img:"",//封面
            name:"",//作者
            title:"",//标题
            is:false
        },
      isfist:false,
      loading:true,
      is:false

  },
//    歌单
    gedan_arr:{
        arr:[],
        is:false,
        is_is:false,
    },
//    排行榜
    pai:{
        arr:[],
        is:false
    }
}