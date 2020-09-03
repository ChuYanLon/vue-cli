import Vue from "vue"
import axios from "axios"
Vue.use(axios)

export default function http(config) {
    let http=axios.create({
        baseURL:"https://api.eyunzhu.com",
        timeout:100000
    })
    return http(config)
}
