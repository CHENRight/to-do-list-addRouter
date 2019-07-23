import getters from './getter'
import actions from  './action'
import mutations from './mutation'

import  Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: [],
        status: 0
    },
    getters,
    actions,
    mutations
});


export default store;