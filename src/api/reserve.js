import axios 
 from 'axios'
export default {
  getList(data) {
    return new Promise((resolve,reject)=>{
        axios.post('/api/getReserve',{
            ...data
        }).then(res=>resolve(res))
        .catch(err=>reject(err))
    })
  }
}
