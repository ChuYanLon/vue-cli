import axios from "axios";

export let response=axios.interceptors.response.use(res=>{
    console.log("正在加载...")
    return res
},err=>{
    console.log(err)
})