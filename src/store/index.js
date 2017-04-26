// 组装模块并导出 store

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

console.log(mutations);

Vue.use(Vuex);

const state = {
    login: false,
    user: {
        id: null,
        name: null,
        slogan: null,
        avatar: null
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})