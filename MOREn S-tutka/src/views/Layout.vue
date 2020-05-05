<template>
  <v-app>
    <v-app-bar app color="#00A5E5" dark height="40pt"></v-app-bar>

    <v-container grid-list-md text-xs-center fluid pa-0>
      <v-layout row wrap>
        <v-flex xs12 pa-0>
          <v-card outlined>
            <v-card-title>
              <v-card-text class="px-0 text-center" style="font-size: 23pt;">{{ appHeader }}</v-card-text>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs10 offset-xs1>
          <v-select
            :label="vselectLabel"
            outlined
            v-model="city"
            :items="cities"
            style="font-size: 13pt;"
            color="#00A5E5"
            class="my-text-style"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <weatherCard :allWeathers="allWeathers" :city="city" />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import weatherCard from "@/components/weatherCard";

export default {
  components: {
    weatherCard: weatherCard
  },
  data: () => ({
    city: "",
    appHeader: "Säätutka",
    vselectLabel: "Kaikki kaupungit",
    cities: [
      { text: "Kaikki kaupungit", value: "Kaikki kaupungit" },
      { text: "Tampere", value: "Tampere" },
      { text: "Jyväskylä", value: "Jyväskylä" },
      { text: "Kuopio", value: "Kuopio" },
      { text: "Helsinki", value: "Helsinki" }
    ]
  }),
  mounted() {
    if (this.allWeathers < 1) {
      this.getWeathers()
        .then(() => {
          this.$store.dispatch("snackbar/setSnackbar", {
            showing: true,
            text: "Weathers loaded successfully"
          });
        })
        .catch(error => {
          this.$store.dispatch("snackbar/setSnackbar", {
            showing: true,
            text: error,
            timeout: 10000,
            color: "error"
          });
        });
    }
  },
  computed: {
    ...mapState({
      allWeathers: state => state.weathers.allWeathers
    })
  },
  methods: {
    ...mapActions("weathers", {
      getWeathers: "fetchWeathers"
    })
  }
};
</script>