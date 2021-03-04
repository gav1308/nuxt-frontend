export default {
  state() {
    return {
      unitsize: false,
    }
  },

  mutations: {
    unitsize(state, unitsize) {
      state.unitsize = unitsize;
    }

  },

  actions: {
    unitsize({commit}, unitsize) {
      commit("unitsize", unitsize);
    }
  },

  modules: {}
}
