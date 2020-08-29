import {Message} from "element-ui";
import router from "../router";
import {http} from "../api/index"
export default {
   bth(state){
      if (state.form.text==123456 && state.form.name=="巧克力" && state.form.pass==123456){
          state.form.is=true
         router.push("/home")
          state.form.alter=true
          setTimeout(()=>{
              state.form.alter=false
          },1000)
      }else{
        Message({
            message: '未检测到该用户信息，请从新输入！',
            type: 'warning'
        })
      }
   },
   src_bth(state){
       http({
         url:"/search?keywords="+state.sre_src.src
      }).then(res=>{
           state.sre_src.arr=[]
           state.sre_src.arr_mv=[]
            for (let i=0;i<res.result.songs.length;i++){
                if (res.result.songs[i].mvid!=0){
                    state.sre_src.arr_mv.push(res.result.songs[i])
                }else{
                    state.sre_src.arr.push(res.result.songs[i])
                }
            }
          // state.sre_src.arr.push(res.result.songs)
           console.log( state.sre_src.arr)
           console.log( state.sre_src.arr_mv)
      }).catch(error=>{
         console.log(error)
      })
   }
}