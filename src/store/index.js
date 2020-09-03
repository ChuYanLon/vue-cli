import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //请求过来的数据，没有经过处理
        arr:[],
        //请求视频详情
        is:false,
        mp4:{
            arr:[],
            title:"",
            name:"",
            url:"",
            img:"",
            is:false,
        }
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    }
})