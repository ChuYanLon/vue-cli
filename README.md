## axios学习笔记  

##### 01 get请求

`请求方式:get`  

     mounted() {
                this.$axios.get("https://api.uomg.com/api/rand.qinghua",{
                    params:{
                        format:"json"
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
            }
  
>get请求后面传参数的时候有二种:  
>第一种:是直接在地址后面加上?跟上参数  
>第二种:在后面加上一个对象，在里面添加一个params对象，所有需要传递的参数都写到里面
           
#####  02 post请求

`请求方式:post`  

     mounted() {
                this.$axios.post("https://api.uomg.com/api/rand.qinghua",{
                    format:"json"
                }).then(res=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })
            }
           
>post请求后面加参数时不需要加在params里面，可以直接填写到里面           
           
#####  03 执行多个并发请求

`并发请求`

         axios.all([
                   axios.get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json"),
                   axios.get("https://api.uomg.com/api/rand.music?sort=飙升榜&format=json")
               ]).then(
                   axios.spread((one,two)=>{
                       console.log(one)
                       console.log(two)
                   })
               ).catch(error=>{
                   console.log(error)
               })

>$axios.all([第一个请求,第二个请求]).then($axios.spread((返回的第一个请求的数据,返回第二个请求的数据)=>{数据处理}))  
>
>错误确定时间:2020年8月20日09:05:57  
>
>出错人:褚燕龙  
>
>修复错误时间:2020年8月20日19:35:13 

#####  04 配置全局配置

`路径`  

    在main.js里面配置  
    axios.defaults.baseURL="https://api.uomg.com"  
    然后在所有需要请求次数据的地方都可以写出  
     mounted() {
                this.$axios.get("api/rand.qinghua",{
                    params:{
                        format:"json"
                    }
                }).then(res=>{
                    console.log(res)
                })
            }
 
>还有俩个配置，都可以在文档里面查看，最常用的就是这个

#####  05封装axios 

+ 创建一个文件夹用于存放网络请求
+ 在文件里面创建一个index.js,里面写如下代码


    import axios from "axios"
    
    export function http(config) {
    //    创建axios实例
        let http=axios.create({
        //    全局配置
            baseURL:"https://api.uomg.com/api",
        //    超时报错
            timeout:5000
        })
        return http(config)
    }
   
+ 使用的时候这样做


    //引入文件
    import {http} from "./api/index"
    
    http({
    //    传入常用参数
        url:"/rand.music?sort=热歌榜&format=json"
    }).then(res=>{
        console.log(res)
    }).catch(error=>{
        console.log(error)
    })

#####  06 axios 拦截器

>拦截器分俩种:  
>1. 请求之前，请求中，数据没有到达浏览器的时候 request
>2. 请求完成，数据接收到，做数据筛选  response

`1`  

    import axios from "axios"
    export function http(config) {
    
    //    创建axios实例
        let http=axios.create({
        //    全局配置
            baseURL:"https://api.uomg.com/api",
        //    超时报错
            timeout:5000
        })
        http.interceptors.request.use(config=>{
            console.log("正在加载...")
            return config
        },err=>{
            console.log(err)
        })
        return http(config)
    
    }
--------------------------------
`2`  

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
   
>在创建实例axios实例后，不能直接把拦截器添加到axios原型上,需要添加到创建的实例上  

##### 创建axios实例

+ 创建axios实例使用axios.create({里面填写配置})


    //    创建axios实例
        let http=axios.create({
        //    全局配置
            baseURL:"https://api.uomg.com/api",
        //    超时报错
            timeout:5000
        })

>配置问题可以网站找,常用的有 baseURL,timeout,





    

           

   
   