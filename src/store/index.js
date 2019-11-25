import Vue from 'vue';
import Vuex from 'vuex';
import module_home from './modules/home/state';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        module_home,
    }
})

export default store;