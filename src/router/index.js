import Vue from "vue"
import router from "vue-router"
Vue.use(router)
export default new router({
    mode:"history",
    routes:[
        {
            path:"/",
            component:()=>import("../view/home")
        },
        {
            path:"/home",
            component:()=>import("../view/home"),
            children:[
                {
                   path: "main",
                   component:()=>import("../view/main")
                },
                {
                    path:"temp table",
                    component:()=>import("../view/temp_table")
                },
                {
                    path: "video",
                    component:()=>import("../components/play")
                },
                {
                    path:"tem",
                    component:()=>import("../view/tem")
                },
                {
                    path:"tab main",
                    component:()=>import("../view/tab_man")
                }
            ]
        },
    ]
})