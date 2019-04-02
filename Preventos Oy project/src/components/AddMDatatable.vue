<!--Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"-->
<template>
<!--Ulkoasu on hyvin sama kuin UserDatatable.vue, joten siellä on tarkempi kommentointi.
Täällä metodit ovat myös samanlaisia (viittaavat vain eri stateen), joten selkä metodien kommentointi UserDatatable.vue:ssa-->
  <v-container class="img-banner" fluid>
    <v-dialog
      v-model="dialog"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="save()"
    >
      <v-form ref="dialog1form" v-model="valid" lazy-validation>
        <v-card>
          <MeasurementDialog :editedItem="editedItem" :formTitle="formTitle">
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="save">Tallenna</v-btn>
          </MeasurementDialog>
        </v-card>
      </v-form>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="editItem(rownumber)"
    >
      <v-card>
        <MeasurementDialog :editedItem="editedItem" :formTitle="formTitle" :isDisabled="true">
          <v-layout row wrap>
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="editItem(rownumber)">Muokkaa</v-btn>
            <v-btn color="#005479" flat @click="deleteItem(rownumber)">Poista</v-btn>
          </v-layout>
        </MeasurementDialog>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="ConfirmDialog"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="closeYes(methodvar)"
    >
      <v-card>
        <v-card-title class="headline">Haluatko varmasti poistaa {{ itemtodelete }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#005479" flat @click="close">Ei</v-btn>
          <v-btn color="#005479" flat @click="closeYes(methodvar)">Kyllä</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <div class="img-bannercontent">
    <p class="header">Mittaustulokset</p>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 sm5 md4 lg3 class="pr-3 pl-3 text-xs-right">
        <v-btn dark color="#00abdb" @click="dialog=true">Lisää mittaustulos</v-btn>
        <v-text-field class='my-text-style' dark color="white" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-select class='my-text-style' dark color="white" v-model="searchtype" :items="uniqueTypes" ></v-select>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex class="hidden-xs-only">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="tableFilter"
          :search="search"
          item-key="tyyppi"
          select-all
          class="elevation-1"
          :pagination.sync="pagination"
          must-sort
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.tyyppi }}</td>
            <td>{{ props.item.tulos }}</td>
            <td>{{ props.item.paikka }}</td>
            <td>{{ props.item.paivays }}</td>
            <td>{{ props.item.aika }}</td>
            <td>{{ props.item.testi }}</td>
            <td>{{ props.item.lisatietoja }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="#575756" icon="warning">Ei mittaustuloksia</v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex class="hidden-sm-and-up">
        <v-data-table
          v-model="selected"
          :headers="headers2"
          :items="tableFilter"
          :search="search"
          item-key="tyyppi"
          select-all
          class="elevation-1"
          :pagination.sync="pagination"
          must-sort
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.tyyppi }}</td>
            <td>{{ props.item.tulos }}</td>
            <td hidden>{{ props.item.paikka }}</td>
            <td hidden>{{ props.item.paivays }}</td>
            <td hidden>{{ props.item.aika }}</td>
            <td hidden>{{ props.item.testi }}</td>
            <td hidden>{{ props.item.lisatietoja }}</td>
            <td class="justify-center layout px-0">
              <v-menu offset-y>
                <v-btn class="roundbtn" slot="activator" fab dark color="#575756" small>
                  <v-icon>list</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile @click="watchitem(props.item)">Katsele</v-list-tile>
                  <v-list-tile @click="editItem(props.item)">Muokkaa</v-list-tile>
                  <v-list-tile @click="deleteItem(props.item)">Poista</v-list-tile>
                </v-list>
              </v-menu>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="#575756" icon="warning">Ei mittaustuloksia</v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <div class="text-xs-right">
      <v-spacer></v-spacer>
      <v-btn dark color="#00abdb" @click="deletechosen">Poista valitut</v-btn>
    </div>
  </div>
  </v-container>
</template>

<script>
/*Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"
Korjaa datatableista item-key: "tyyppi"

*/
import "vuetify/dist/vuetify.min.css";
import { mapMutations } from "vuex";
import MeasurementDialog from "../components/AddMDialog.vue";

export default {
  components: { MeasurementDialog },
  data: () => ({
    valid: true,
    rownumber: "",
    dialog: false,
    dialog2: false,
    ConfirmDialog: false,
    search: "",
    searchtype: "",
    index2: "",
    itemtodelete: "",
    methodvar: "",
    selectedall: "",
    selected: [],
    pagination: {
      rowsPerPage: 25
    },
    items: [{ title: "Katsele" }, { title: "Muokkaa" }, { title: "Poista" }],
    headers: [
      {
        text: "Mittaustyyppi",
        align: "left",
        sortable: false,
        value: "mittaustyyppi"
      },
      { text: "Tulos", value: "tulos" },
      { text: "Mittauspaikka", value: "paikka" },
      { text: "Päiväys", value: "paivays" },
      { text: "Aika", value: "aika" },
      { text: "Testi?", value: "testi" },
      { text: "Lisätietoja", value: "lisatietoja" },
      { text: "", value: "", sortable: false }
    ],
    headers2: [
      {
        text: "Mittaustyyppi",
        align: "left",
        sortable: false,
        value: "mittaustyyppi"
      },
      { text: "Tulos", value: "tulos" },
      { text: "Mittauspaikka", value: "paikka", class: "header_hidden" },
      { text: "Päiväys", value: "paivays", class: "header_hidden" },
      { text: "Aika", value: "aika", class: "header_hidden" },
      { text: "Testi?", value: "testi", class: "header_hidden" },
      { text: "Lisätietoja", value: "lisatietoja", class: "header_hidden" },
      { text: "", value: "", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      tunnus: "",
      etunimi: "",
      sukunimi: "",
      sähköposti: "",
      puhelinnro: "",
      yritys: ""
    },
    defaultItem: {
      tunnus: "",
      etunimi: "",
      sukunimi: "",
      sähköposti: "",
      puhelinnro: "",
      yritys: ""
    }
  }),
  computed: {
    measurements() {
      return this.$store.getters.getMeasurements;
    },
    formTitle() {
      return this.editedIndex === -1
        ? "Lisää mittaustulos"
        : "Muokkaa mittaustulosta";
    },
    tableFilter() {
      return this.measurements.filter(
        item => item.paikka === this.searchtype || "" === this.searchtype || "Mittauspaikat" === this.searchtype
      );
    },
    uniqueTypes: function() {
      let filtered_array = ['Mittauspaikat'];
      for (let i = 0; i < this.measurements.length; i++) {
        if (filtered_array.indexOf(this.measurements[i].paikka) === -1) {
          filtered_array.push(this.measurements[i].paikka);
        }
      }
      return filtered_array;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    ...mapMutations([
      "DELETE_MEASUREMENT",
      "SAVE_MEASUREMENT",
      "DELETE_CHOSEN_M"
    ]),
    watchitem(item) {
      this.rownumber = item;
      this.editedIndex = this.measurements.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
    },
    editItem(item) {
      this.editedIndex = this.measurements.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.index2 = this.measurements.indexOf(item);
      this.methodvar = "1";
      this.itemtodelete = "tämän mittaustuloksen?";
      this.ConfirmDialog = true;
      this.dialog2 = false;
    },
    deletechosen() {
      this.ConfirmDialog = true;
      this.methodvar = "2";
      this.itemtodelete = "poistaa kyseiset mittaustulokset?";
      this.selectedall = { key1: this.selected.length, key2: this.selected };
    },
    save() {
      if (this.$refs.dialog1form.validate()) {
        if (this.editedIndex > -1) {
          Object.assign(this.measurements[this.editedIndex], this.editedItem);
        } else {
          this.SAVE_MEASUREMENT(this.editedItem);
        }
        this.close();
        this.$refs.dialog1form.resetValidation()
      }
    },
    watchitem(item) {
      this.rownumber = item;
      this.editedIndex = this.measurements.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
    },
    close() {
      this.dialog = false;
      this.dialog2 = false;
      this.ConfirmDialog = false;
      this.$refs.dialog1form.resetValidation()
      
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 20);
    },
    closeYes(methodvar) {
      if (methodvar == "1") {
        this.DELETE_MEASUREMENT(this.index2);
      } else if (methodvar == "2") {
        this.DELETE_CHOSEN_M(this.selectedall);
      }
      this.ConfirmDialog = false;
    }
  }
};
</script>
<style scoped>
.my-text-style >>> .v-label {
  color: white;
}
</style>