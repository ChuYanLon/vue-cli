import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import {http} from "./api/index"
Vue.prototype.$http=http
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false
import APlayer from "@moefe/vue-aplayer"
import("./assets/css/reset.css")
import VideoPlayer from "vue-video-player"
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)
Vue.use(APlayer,{
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
























