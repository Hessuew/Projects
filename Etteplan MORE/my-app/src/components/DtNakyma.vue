<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg2 offset-lg3 offset-md1>
          <p class="subheading font-weight-bold mb-1">Hae aseman nimellä</p>
          <v-autocomplete
            v-model="valittukaupunki"
            :items="asemat"
            :search-input.sync="search"
            cache-items
            class="mx-3 pb-2"
            flat
            hide-no-data
            hide-details
            label="Asemat"
            clearable
            item-text="stationName"
            item-value="stationShortCode"
            color="#56AF23"
            @change="haejunat()"
          ></v-autocomplete>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center class="pt-4">
        <v-flex xs12 md10 lg6>
          <v-tabs v-model="tab" align-with-title color="transparent">
            <v-tabs-slider color="#56AF23"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>
          <!--Mahdollisesti datatablen olisi voinut tehdä omaan komponenttin,
           ladata sen komponenttina ja antaa propseina muutettavat arvot-->
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-data-table
                  :loading="loading"
                  :headers="headers"
                  :items="saapuvatjunat"
                  class="elevation-1"
                  :pagination.sync="pagination"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <tr :disabled="props.item.cancelled == true"> <!--Ei toimi-->
                    <td><div v-if='props.item.commuterLineID == ""'>{{ props.item.trainType }} {{ props.item.trainNumber }}</div><div v-else>Commuter train {{ props.item.commuterLineID }}</div></td>
                    <!--Kaupunki on lyhyellä nimellä-->
                    <td>{{ props.item.timeTableRows[0].stationShortCode }}</td>
                    <td>{{ props.item.timeTableRows[props.item.timeTableRows.length -1].stationShortCode }}</td>
                    <td>
                      <!--Tässä ajat ovat väärin, kun en keksinyt miten haen 'valittukaupunki' ajan.
                      Mietin '0' tilalle jotain tämän kaltaista: props.item.timeTableRows.indexOf(valittukaupunki)-->
                      <div
                        v-if="props.item.timeTableRows[0].actualTime != null && props.item.timeTableRows[0].actualTime.substring(11, 16) != props.item.timeTableRows[0].scheduledTime.substring(11, 16) && props.item.cancelled != true"
                      ><font size='3px' color='red'>{{ props.item.timeTableRows[0].actualTime.substring(11, 16) }}</font><br>({{props.item.timeTableRows[0].scheduledTime.substring(11, 16) }})</div>
                      <div v-else>{{props.item.timeTableRows[0].scheduledTime.substring(11, 16) }}</div>
                      <font v-if="props.item.cancelled == true" color="red">Cancelled</font>
                    </td>
                    </tr>
                  </template>
                  <template slot="no-data">
                    <v-alert :value="true" color="#56AF23" icon="warning">Ei saapuvia junia</v-alert>
                  </template>
                </v-data-table>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-data-table
                  :loading="loading"
                  :headers="headers2"
                  :items="lahtevatjunat"
                  class="elevation-1"
                  :pagination.sync="pagination"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <tr :disabled="props.item.cancelled == true">
                    <td><div v-if='props.item.commuterLineID == ""'>{{ props.item.trainType }} {{ props.item.trainNumber }}</div><div v-else>Commuter train {{ props.item.commuterLineID }}</div></td>
                    <td>{{ props.item.timeTableRows[0].stationShortCode }}</td>
                    <td>{{ props.item.timeTableRows[props.item.timeTableRows.length -1].stationShortCode }}</td>
                    <td>
                      <div
                        v-if="props.item.timeTableRows[0].actualTime != null && props.item.timeTableRows[0].actualTime.substring(11, 16) != props.item.timeTableRows[0].scheduledTime.substring(11, 16) && props.item.cancelled != true"
                      ><font size='3px' color='red'>{{ props.item.timeTableRows[0].actualTime.substring(11, 16) }}</font><br>({{props.item.timeTableRows[0].scheduledTime.substring(11, 16) }})</div>
                      <div v-else>{{props.item.timeTableRows[0].scheduledTime.substring(11, 16) }}</div>
                      <font v-if="props.item.cancelled == true" color="red">Cancelled</font>
                    </td>
                    </tr>
                  </template>
                  <template slot="no-data">
                    <v-alert :value="true" color="#56AF23" icon="warning">Ei lähteviä junia</v-alert>
                  </template>
                </v-data-table>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    search: null,
    select: null,
    tab: null,
    loading: false,
    valittukaupunki: "",
    pagination: { rowsPerPage: 10 },
    items: ["Saapuvat", "Lähtevät"],
    headers: [
      { text: "Juna", value: "juna", sortable: false },
      { text: "Lähtöasema", value: "lahtoasema", sortable: false },
      { text: "Pääteasema", value: "paateasema", sortable: false },
      { text: "Saapuu", value: "saapuu", sortable: false }
    ],
    headers2: [
      { text: "Juna", value: "juna", sortable: false },
      { text: "Lähtöasema", value: "lahtoasema", sortable: false },
      { text: "Pääteasema", value: "paateasema", sortable: false },
      { text: "Lähtee", value: "lahtee", sortable: false }
    ]
  }),
  mounted() {
    this.$store.dispatch("haeAsemat");
  },
  computed: {
    ...mapState(["saapuvatjunat", "lahtevatjunat", "asemat"]),
  },
  methods: {
    ...mapMutations(["SET_ARRIVINGTRAINS", "SET_DEPARTURINGTRAINS"]),
    haejunat() {
      this.loading = true;
      this.SET_ARRIVINGTRAINS(this.valittukaupunki);
      this.SET_DEPARTURINGTRAINS(this.valittukaupunki);
      setTimeout(() => {
        this.loading = false;
      }, 300);
    }
  }
};
</script>

<style>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.1);
}
.v-btn {
  border-radius: 7px;
}
.header_hidden {
  display: none;
}
.v-tabs__container--align-with-title {
  padding-left: 0px;
}
table.v-table tbody tr td {
  font-size: 15px;
}
font {
  font-weight: 500;
}
@media screen and (max-width: 480px) {
  table.v-table tbody tr td {
    font-size: 13px;
  }
  table.v-table tbody td:first-child,
  table.v-table tbody td:not(:first-child),
  table.v-table tbody th:first-child,
  table.v-table tbody th:not(:first-child),
  table.v-table thead td:first-child,
  table.v-table thead td:not(:first-child),
  table.v-table thead th:first-child,
  table.v-table thead th:not(:first-child) {
    padding: 0 5px;
  }
}
</style>
