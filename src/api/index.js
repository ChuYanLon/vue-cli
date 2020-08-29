import axios from "axios"

export function http(config) {
  let http=axios.create({
      timeout:1000000,
      baseURL:"https://autumnfish.cn"
  })
    http.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })
    return http(config)
}