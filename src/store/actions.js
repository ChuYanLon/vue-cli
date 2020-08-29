import {Message} from "element-ui";
export default {
bth:({commit,state})=>{
    if (state.form.text!="" && state.form.pass!="" && state.form.name!=""){
        commit("bth")
    }else{
     Message({
         message: '温馨提示   :   请填写完登录信息再提交哦!',
         type: 'warning'
     })
    }
},
src_bth:({commit,state})=>{
  if (state.sre_src.src!=""){
      commit("src_bth")
  }else{
      console.error("Please fill in what you need to search")
      Message("请输入需要搜索的内容！")
  }
},

}