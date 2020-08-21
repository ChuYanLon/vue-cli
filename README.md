# vuex学习笔记
`vuex五大核心`  

1.  state (共享数据)
2.  actions (异步传递)
3.  mutations (逻辑处理)
4.  getters (数据同步)
5.  modules (state模块化)

>vuex的出现大大的提高了数据传递的速度，与简便

`vuex配置代码如下`  
    
    //引入需要的文件
    import Vue from "vue"
    import Vuex from "vuex"
    Vue.use(Vuex)
    
    //共享数据
    let state={
     cont:0
    }
    //异步操作
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
    //逻辑处理
    let mutations={
      onbth(state){
          return state.cont++
      },
        inbth(state){
          return state.cont--
        }
    }
    //数据同步
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
    

-----------------------------------  

`使用/提交`  

    <template>
      <div id="app">
        <h3>vuex学习开始...</h3>
        <p>初始值为:{{cont}}</p>
        <button @click="onbth">点击加一</button>
        <button @click="inbth">点击减一</button>
      </div>
    </template>
    
    <script>
    import {mapActions,mapGetters} from "vuex"
    export default {
      name: 'App',
      computed:{
        ...mapGetters([
                "cont"
        ])
      },
      methods:{
        ...mapActions([
                "onbth",
                "inbth"
        ])
      }
    }
    </script>
    
    <style>


>mapActions-->获取动作(事件，然后传递给vuex配置文件里面的actions-->mutations)  
>mapGetters-->获取需要同步的数据(然后传递到vuex配置文件里面的getters里面-->reture到state共享数据里面)






















