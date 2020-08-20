import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),

}).$mount('#app')
// http("get","/rand.music?sort=热歌榜&format=json",
//     res=>{
//       console.log(res)
//     },error=>{
//       console.log(error)
//     })

// http({
//     url:"/rand.music?sort=热歌榜&format=json"
// }).then(res=>{
//     console.log(res)
// }).catch(error=>{
//     console.log(error)
// })
// http({
//     url:"/rand.music?sort=热歌榜&format=json"
// }).then(res=>{
//     console.log(res)
// })

//引入文件

// import {http} from "./api/index"
// http({
// //    传入常用参数
//     url:"/rand.music?sort=热歌榜&format=json"
// }).then(res=>{
//     console.log(res)
// }).catch(error=>{
//     console.log(error)
// })
//
//


