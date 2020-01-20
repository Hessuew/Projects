import Vue from "vue";
import Vuex from "vuex";
import trainsModule from "./trains";
import snackbarModule from "./snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbar: snackbarModule,
    trains: trainsModule,
  },
});