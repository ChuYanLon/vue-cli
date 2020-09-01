import store from "../store";
import {Message} from "element-ui";
export default [
    //默认优先进入登录页面
    {
        path:"",
         component:()=>import("../view/logn/logn"),
        meta:{
            title:"咪咕音乐登录页面"
        }
    },
    //主页面
    {
        path: "/home",
        component: () => import("../view/home/home"),
        beforeEnter:(to,form,next)=>{
            if (store.state.form.alter) {
                Message({
                    message: '登录成功！',
                    type: 'success'
                })
            }
            next()
        },
        meta:{
            auth:true,
            title:"首页"
        },

        //主页面里面需要现在的子数据
        children:[
            //默认指向首页数据
            {
                path: "",
               // component:()=>import("../view/home/  children/main")
                redirect:"main"
            },
            //首页数据
            {
                path:"main",
                component:()=>import("../view/home/  children/main")
            },
            //热门推荐
            {
                path:"Popular recommendation",
                component:()=>import("../view/home/  children/Popular recommendation"),
                children:[
                    {
                        path: "",
                        redirect:"Ppular_one"
                    }
                    ,
                    //推荐
                    {
                        path: "Ppular_one",
                        component:()=>import("../view/Popular recommendation/Ppular_one")
                    },
                //    歌单
                    {
                        path:"gedan.vue",
                        component:()=>import("../view/Popular recommendation/gedan")
                    },
                ]
            },
            //mv
            {
                path:"mv",
                component:()=>import("../view/home/  children/mv")
            },
            //个人主页
            {
                path:"my",
                component:()=>import("../view/home/  children/my")
            },
            //    歌手
            {
                path: "geshou",
                component:()=>import("../view/home/  children/geshou")
            },
            {
                path: "bang",
                component:()=>import("../view/home/  children/bang")
            },
            {
                path:"pai",
                component:()=>import("../view/home/  children/pai")
            },
            {
                path: "src_new",
                component:()=>import("../view/sre/src_new")
            }
        ]
    },
    {
        path: "/Video playback",
        component:()=>import("../play/Video playback"),
        meta: {
            title: "咪咕视频在线播放"
        }
    },
    {
        path: "/music player",
        component:()=>import("../play/music player"),
        meta: {
            title: "咪咕音乐在线播放"
        }
    },

]
//都使用懒加载