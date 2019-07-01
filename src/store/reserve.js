import reserve from '@/api/reserve'
import { Message } from 'element-ui'
const state = {
    getLists:[]
};

const getters = {
    getLists:state=>state.getLists
};
const mutations = {
    getAllLists(state,lists){
        state.getLists = lists
    }
};
const actions = {
    getAllList({commit,dispatch,rootGetters},data){
        return new Promise((resolve,reject)=>{
            reserve.getList({...data})
            .then(res=>{

                if(res && res.data && res.data.status === 'N'){
                    reject();
                    Message({
                        message: res.data.errorCode + ': ' + res.data.errorMsg,
                        type: 'info'
                    })
                }else{
                    resolve(res);
                    // console.log(res.data.data.results,2)
                    commit('getAllLists', res.data.data.results)
                }
            })
            .catch(err=>{
                reject();
                Message({
                    message: '获取列表失败: ' + (err && err.message || ''),
                    type: 'info'
                })
            })
        })
    }
};
export default{
    state,
    getters,
    mutations,
    actions
}