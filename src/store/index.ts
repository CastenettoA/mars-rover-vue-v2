import { createStore } from 'vuex'
import axios from 'axios';

const state = {
  apiList: [], // api endpoint list
  toastStatus: false, // app toast message status
  toastMessage: "Rover mosso con successo.", // app toast message
  currentPosition: {} // to update the rover pos. on the MarsMap componet
};

const getters = {
  getApiList: (state:any) => state.apiList,
  getToastStatus: (state:any) => state.toastStatus,
  getToastMessage: (state:any) => state.toastMessage,
  getCurrentPosition: (state:any) => state.currentPosition
};

const mutations = {
  SET_API_LIST(state:any, apis:any) {
    state.apiList = apis;
  },

  TOGGLE_TOAST(state:any, options:any) {
    state.toastStatus = options.toastStatus;
    if(options.toastMessage) state.toastMessage = options.toastMessage;
  },

  UPDATE_ROVER_POS(state:any, options: any) {
    if(options.currentPosition) state.currentPosition = options.currentPosition;
  }
};

const actions = {
  async fetchApiList({ commit } :any) {
    //a syncronous approach: https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true
    const r = await axios.get(process.env.VUE_APP_ROVER_API_BASE_URL+'routeListJson')
      .then((r) => {
         commit("SET_API_LIST", r.data )
        })
      .catch((e) => console.log(e));
  },

  toggleToast({ commit }:any, options:any) {
    commit("TOGGLE_TOAST", options)

    // close tost after 3.5s
    if(options.toastStatus == true) {
      setTimeout(()=> {
        commit("TOGGLE_TOAST", {toastStatus: false})
      }, 3500); // todo: set-timeout not work so well with multiple command
    }
  },

  updateRoverPosition({ commit }:any, options:any) {
    commit("UPDATE_ROVER_POS", options); // launch mutation to change the rover position on the map
  }


};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})


