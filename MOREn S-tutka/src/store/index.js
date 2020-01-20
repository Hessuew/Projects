import Vue from "vue";
import Vuex from "vuex";
import snackbarModule from "./snackbar";
import weatherModule from "./weathers";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbar: snackbarModule,
    weathers: weatherModule,
  },
});