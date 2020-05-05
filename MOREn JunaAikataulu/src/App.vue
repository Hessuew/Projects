<template>
  <v-app>
      <v-toolbar color='#56AF23'>
        <v-toolbar-title class='headline'>
          <span class='font-weight-light'>{{trainInfo}}</span>
        </v-toolbar-title>
      </v-toolbar>
    <v-content>
      <Datatable />
    </v-content>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + index"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`top: ${(index * 100) + 20}px`"
    >
      {{snackbar.text}}
      <v-btn text @click="snackbar.showing = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Datatable from './views/TrainScheduleComponent';
import { mapState } from "vuex";

export default {
  name: 'app',
  components: {
    Datatable
  },
  data() {
    return {
      trainInfo: 'Aseman junatiedot'
    };
  },
    computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  }
};
</script>
<style>
@import "./assets/styles.css";
</style>