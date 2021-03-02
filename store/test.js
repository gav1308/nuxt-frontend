export default {
  state() {
    return {
      counter: 0
    }
  },

  mutations: {
    test(state) {
      state.counter++;
    }
  },

  actions: {
    test({
      commit
    }) {
      commit("test");
    }
  },
}
