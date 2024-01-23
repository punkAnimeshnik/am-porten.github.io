import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    header: null,
    main: null,
    footer: null,
    loading: false,
    lang: "eng"
  },
  getters: {
  },
  mutations: {
    loadInfo(state, info){
      state.header = info.header
      state.main = info.main
      state.footer = info.footer
    }
  },
  actions: {
    async Loading({commit, state}){
      const Info = await  axios.get('/locolaze.json')
      switch (state.lang){
        case "rus":
          commit('loadInfo', Info.data.RUS)
          break;
        case "eng":
          commit('loadInfo', Info.data.ENG)
          break;
      }


    }
  },
  modules: {
  }
})
