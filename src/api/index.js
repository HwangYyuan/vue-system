import Vue from 'vue'
import axios from 'axios'
import { rejects } from 'assert';
Vue.prototype.axios = axios
const base = 'http://localhost:8080'
axios.defaults.baseURL = base
var source = axios.CancelToken.source();
console.log(source)
// axios.interceptors.request.use(function(config){
//     // config.cancelToken =  source.token;
//     // console.log(config.cancelToken)
//     return config;
    
// },function(err){
//     return Promise.reject(err)
// })
// axios.interceptors.response.use((res)=>{
//    if(res.status==401){
//     router && router.push({
//         name: 'choiceTwo'
//     })
//     return res
//    }
// },(err)=>{
//     return Promise.reject(err)
// })
export{
    axios
}