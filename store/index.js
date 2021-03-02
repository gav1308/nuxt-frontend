import test from './test';

export default {
  state() {
    return {
      mountains: [],
    }
  },

  mutations: {
    mountains(state, mountains) {
      state.mountains = mountains;
    }

  },

  actions: {
    mountains({commit}, {mountains}) {
      commit("mountains", mountains);
    }
  },

  modules: {
    test,
  }
}
