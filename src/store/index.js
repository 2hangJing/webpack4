import Vue from 'vue';
import Vuex from 'vuex';
import module_home from './modules/home/state';
import plugin from './plugin';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        module_home,
    },
    plugins: [plugin]
});

export default store;