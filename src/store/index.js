import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
      apiList: [],
  },
  getters: {
    getApiList: (state) => state.apiList,
  },
  mutations: {
    SET_API_LIST(state, apis) {
      state.apiList = apis;
    }
  },
  actions: {
    async fetchApiList({ commit }) {
      //a syncronous approach: https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true
      const r = await axios.get(process.env.VUE_APP_ROVER_API_BASE_URL+'routeListJson')
        .then((r) => {
           console.log('res', r.data);
           commit("SET_API_LIST", r.data )
          })
        .catch((e) => console.log(error));
    },
  },
  modules: {
  }
})


