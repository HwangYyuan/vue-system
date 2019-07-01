import Vuex from 'vuex'
import Vue from 'Vue'
import reserve from './reserve'
import peizhi from './peizhi'
Vue.use(Vuex)
const state = {};
const getters = {};
const mutations = {};
const actions = {};
export default new Vuex.Store({
    modules:{
        reserve,
        peizhi
    },
    state,
    getters,
    mutations,
    actions
})
