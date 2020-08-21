import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let state={
 cont:0
}
let actions={
 onbth:({commit})=>{
     setTimeout(()=>{
         commit("onbth")
     },1000)
 },
    inbth:({commit})=>{
        setTimeout(()=>{
            commit("inbth")
        },1000)
    }
}
let mutations={
  onbth(state){
      return state.cont++
  },
    inbth(state){
      return state.cont--
    }
}
let getters={
    cont(state){
        return state.cont
    }
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters

})