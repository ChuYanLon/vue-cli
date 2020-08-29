import store from "../store";
import {Message} from "element-ui";
export default [
    //默认优先进入登录页面
    {
        path:"",
         component:()=>import("../view/logn/logn")
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
            auth:true
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
                        path:"gedan",
                        component:()=>import("../view/Popular recommendation/gedan")
                    },
                //    电台
                    {
                        path:"diantai",
                        component:()=>import("../view/Popular recommendation/diantai")
                    },
                //    歌手
                    {
                        path: "geshou",
                        component:()=>import("../view/Popular recommendation/geshou")
                    }
                ]
            },
            //mv
            {
                path:"mv",
                component:()=>import("../view/home/  children/mv")
            },
            //电台
            {
                path: "radio station",
                component:()=>import("../view/home/  children/radio station")
            },
            //个人主页
            {
                path:"my",
                component:()=>import("../view/home/  children/my")
            }
        ]
    },
    {
        path: "/Video playback",
        component:()=>import("../play/Video playback")
    },
    {
        path: "/music player",
        component:()=>import("../play/music player")
    }

]
//都使用懒加载