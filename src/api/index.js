import axios from "axios"
export function http(config) {

//    创建axios实例
    let http=axios.create({
    //    全局配置
        baseURL:"https://api.uomg.com/api",
    //    超时报错
        timeout:5000
    })
    http.interceptors.response.use(config=>{
        console.log("数据正在加载...")
        return config.data
    },err=>{
        console.log(err)
    })
    return http(config)

}











