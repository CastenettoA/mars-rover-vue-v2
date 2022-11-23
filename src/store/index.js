import { createStore } from 'vuex'
import axios from 'axios';
import { setTimeout } from 'core-js';

export default createStore({
  state: {
      apiList: [], // api endpoint list
      toastStatus: false, // app toast message status
      toastMessage: "Rover mosso con successo." // app toast message
  },
  getters: {
    getApiList: (state) => state.apiList,
    getToastStatus: (state) => state.toastStatus,
    getToastMessage: (state) => state.toastMessage,
  },
  mutations: {
    SET_API_LIST(state, apis) {
      state.apiList = apis;
    },

    TOGGLE_TOAST(state, options) {
      state.toastStatus = options.toastStatus;
      if(options.toastMessage) state.toastMessage = options.toastMessage;
    }
  },
  actions: {
    async fetchApiList({ commit }) {
      //a syncronous approach: https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true
      const r = await axios.get(process.env.VUE_APP_ROVER_API_BASE_URL+'routeListJson')
        .then((r) => {
           commit("SET_API_LIST", r.data )
          })
        .catch((e) => console.log(error));
    },

    toggleToast({ commit }, options) {
      commit("TOGGLE_TOAST", options)

      // close tost after 2s
      if(options.toastStatus == true) {
        setTimeout(()=> {
          commit("TOGGLE_TOAST", {toastStatus: false})
        }, 3500);
      }
    }
  },
  modules: {
  }
})


