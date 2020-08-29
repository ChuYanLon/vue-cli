// import state from "../store/state";
import Vue from "vue"
import vuerouter from "vue-router"
Vue.use(vuerouter)
import routes from "./routes"
// import {Message} from "element-ui";

let router=new vuerouter({
    mode:"history",
    routes
})
//前置路由:检测是否登录
// router.beforeEach((to,from,next)=>{
//     // eslint-disable-next-line no-constant-condition
//     let logn=state.form.is
//   if (logn){
//       next()
//   }else{
//       if (to.path=="/"){
//           next()
//       }else{
//           next("/")
//           // alert("")
//          Message.error("系统检测到您未进行登录，请返回登录页面进行登录...")
//       }
//   }
// })
export default router
