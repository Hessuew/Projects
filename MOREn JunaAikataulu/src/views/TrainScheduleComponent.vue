<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg2 offset-lg3 offset-md1>
          <p class="subheading font-weight-bold mb-1">{{searchText}}</p>
              <v-autocomplete
      v-model="choosedCity"
      :items="stations"
      :search-input.sync="search"
      cache-items
      class="mx-3 pb-2"
      flat
      hide-no-data
      hide-details
      label="Stations"
      clearable
      item-text="stationName"
      item-value="stationShortCode"
      color="#56AF23"
      @change="getTrains()"
    ></v-autocomplete>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center class="pt-4">
        <v-flex xs12 md10 lg6>
          <v-tabs v-model="tab" align-with-title color="transparent">
            <v-tabs-slider color="#56AF23"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <datatable
                  :loading="loading"
                  :headers="headers"
                  :items="arrivingTrains"
                  :cancelled="cancelled"
                  :emptyDatatableMessage="emptyDatatableMessage"
                ></datatable>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <datatable
                  :loading="loading"
                  :headers="headers2"
                  :items="departuringTrains"
                  :sortBy="headers2[3].value"
                  :cancelled="cancelled"
                  :emptyDatatableMessage="emptyDatatableMessage"
                ></datatable>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import datatable from "@/components/Datatable.vue";
//import autocomplete from "@/components/Autocomplete.vue";

export default {
  components: { datatable },
  data: () => ({
    isLoading: false,
    search: null,
    select: null,
    tab: null,
    loading: false,
    choosedCity: "",
    notificationText: "",
    notificationType: "",
    searchText: "Hae aseman nimellä",
    emptyDatatableMessage: "Valitse asema",
    cancelled: "Peruttu",
    items: ["Saapuvat", "Lähtevät"],
    headers: [
      { text: "Juna", value: "TrainNumbers", sortable: false },
      { text: "Lähtöasema", value: "TrainStartStation", sortable: false },
      { text: "Pääteasema", value: "TrainEndStation", sortable: false },
      { text: "Saapuu", value: "TrainScheduledTime" }
    ],
    headers2: [
      { text: "Juna", value: "TrainNumbers", sortable: false },
      { text: "Lähtöasema", value: "TrainStartStation", sortable: false },
      { text: "Pääteasema", value: "TrainEndStation", sortable: false },
      { text: "Lähtee", value: "TrainScheduledTime" }
    ]
  }),
  mounted() {
    this.fetchStations()
  },
  computed: {
    ...mapState({
      arrivingTrains: state => state.trains.arrivingTrains,
      departuringTrains: state => state.trains.departuringTrains,
      stations: state => state.trains.stations
    })
    //...mapGetters({ getstation: 'trains/getStations'})
  },
  methods: {
    ...mapActions("trains", {
      fetchArrivingTrains: "fetchArrivingTrains",
      fetchDeparturingTrains: "fetchDeparturingTrains",
      fetchStations: "fetchStations"
    }),
    getTrains() {
      this.loading = true;
        this.fetchArrivingTrains(this.choosedCity)
        this.fetchDeparturingTrains(this.choosedCity)
      setTimeout(() => {
        this.loading = false;
      }, 300);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }
  }
};
</script>
