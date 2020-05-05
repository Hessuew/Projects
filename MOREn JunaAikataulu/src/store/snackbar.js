export default {
    namespaced: true,
    state: {
      snackbars: []
    },
    mutations: {
      SET_SNACKBAR(state, snackbar) {
        state.snackbars = state.snackbars.concat(snackbar);
      },
    },
    actions: {
      setSnackbar({commit}, snackbar) {
        snackbar.showing = true;
        snackbar.color = snackbar.color || "primary";
        snackbar.timeout = 2000;
        commit("SET_SNACKBAR", snackbar);
      },
    },
    getters: {},
    modules: {}
  }