<template>
<!--Ulkoasu on hyvin sama kuin UserDatatable.vue, joten siellä on tarkempi kommentointi.
Täällä kommentoitu metodeita, jotka ovat erilaisia kuin UserDatatable.vue:ssa-->
  <v-container class="img-banner" fluid>
    <v-dialog
      v-model="dialog"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="save()"
    >
      <v-card>
        <RequestDialog :editedItem="editedItem" :formTitle="formTitle">
          <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
          <v-btn color="#005479" flat @click="save()">Tallenna</v-btn>
        </RequestDialog>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog1v2"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="save2()"
    >
      <v-form ref="dialog2form" v-model="valid" lazy-validation>
        <v-card>
          <RequestDialog :editedItem="editedItem" :formTitle="formTitle">
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="save2()">Tallenna</v-btn>
          </RequestDialog>
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
        <RequestDialog :editedItem="editedItem" :formTitle="formTitle" :isDisabled="true">
          <v-layout row wrap>
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="editItem(rownumber)">Muokkaa</v-btn>
            <v-btn color="#005479" flat @click="deleteItem(rownumber)">Poista</v-btn>
            </v-layout>
        </RequestDialog>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog3"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="editItem2(rownumber)"
    >
      <v-card>
        <RequestDialog :editedItem="editedItem" :formTitle="formTitle" :isDisabled="true">
          <v-layout row wrap>
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="editItem2(rownumber)">Muokkaa</v-btn>
            <v-btn color="#005479" flat @click="deleteItem2(rownumber)">Poista</v-btn>
          </v-layout>
        </RequestDialog>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="AddDialog"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="save()"
    >
      <v-form ref="adddialogform" v-model="valid" lazy-validation>
        <v-card>
          <RequestDialog :editedItem="editedItem" :formTitle="'Täytä mittauspaikkahakemus'">
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="save">Tallenna</v-btn>
          </RequestDialog>
        </v-card>
      </v-form>
    </v-dialog>

    <v-dialog
      v-model="dialog4"
      max-width="500px"
      persistent
      @keydown.esc="close2()"
      @keydown.enter="send()"
    >
      <v-card>
        <v-card-title class="headline">Kirjoita viesti hakemuksen lähettäjälle</v-card-title>
        <v-text-field v-model="messagetext" label="Miksi hakemus hylättiin?"></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#005479" flat @click="close2">Älä lähetä</v-btn>
          <v-btn color="#005479" flat @click="send">Lähetä</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="ConfirmDialog"
      max-width="500px"
      persistent
      @keydown.esc="close2()"
      @keydown.enter="closeYes(methodvar)"
    >
      <v-card>
        <v-card-title class="headline" align="center">Haluatko varmasti {{ itemtodelete }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#005479" flat @click="close2">Ei</v-btn>
          <v-btn color="#005479" flat @click="closeYes(methodvar)">Kyllä</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <div class="img-bannercontent">
    <div v-if="tableFilter.length > 0">
  <p class="header">Mittauspaikkahakemukset</p>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs12 sm6 md5 lg3 class="pr-3 pl-3 text-xs-right">
          <v-btn dark color="#00abdb" @click="AddDialog=true">Tee mittauspaikkahakemus</v-btn>
          <v-text-field class='my-text-style' dark color="white" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
          <v-select class='my-text-style' dark color="white" v-model="measurementplaceapplication" v-bind:items="uniqueNames" ></v-select>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex class="hidden-xs-only">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tableFilter"
            :search="search"
            item-key="nimi"
            select-all
            class="elevation-1"
            :pagination.sync="pagination"
            must-sort
          >
            <template v-slot:items="props">
              <td>
                <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
              </td>
              <td>{{ props.item.nimi }}</td>
              <td>{{ props.item.osoite }}</td>
              <td>{{ props.item.koordinaatit }}</td>
              <td>{{ props.item.pyynnönlähettäjä }}</td>
              <td>{{ props.item.yritys }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="#575756" icon="warning">Ei mittauspaikkahakemuksia</v-alert>
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
            item-key="nimi"
            select-all
            class="elevation-1"
            :pagination.sync="pagination"
            must-sort
          >
            <template v-slot:items="props">
              <td>
                <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details class="pcheckbox"></v-checkbox>
              </td>
              <td hidden>{{ props.item.nimi }}</td>
              <td>{{ props.item.osoite }}</td>
              <td hidden>{{ props.item.koordinaatit }}</td>
              <td hidden>{{ props.item.pyynnönlähettäjä }}</td>
              <td>{{ props.item.yritys }}</td>
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
              <v-alert :value="true" color="#575756" icon="warning">Ei mittauspaikkahakemuksia</v-alert>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>

      <div class="text-xs-right pt-2">
        <v-spacer></v-spacer>
        <v-btn dark color="#00abdb" @click="deletechosen">Poista valitut</v-btn>
        <v-btn dark color="#00abdb" @click="acceptchosen">Hyväksy valitut</v-btn>
      </div>
    </div>
  
    <div v-if="tableFilter.length == 0">
      <p style="color:white; font-size:20px">Mittauspaikkahakemuksia ei ole</p>
      <div class="text-xs-right pt-2">
        <v-spacer></v-spacer>
        <v-btn dark color="#00abdb" @click="AddDialog=true">Tee mittauspaikkahakemus</v-btn>
      </div>
    </div>
    <p class="header">Mittauspaikat</p>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 sm3 md3 lg2 class="pr-3 pl-3">
        <v-text-field
          class='my-text-style' dark color="white"
          v-model="search2"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-select class='my-text-style' dark color="white" v-model="measurementplace" :items="uniqueNames2" ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="hidden-xs-only">
        <v-data-table
          v-model="selected2"
          :headers="headers"
          :items="tableFilter2"
          :search="search2"
          item-key="nimi"
          select-all
          class="elevation-1"
          :pagination.sync="pagination"
          must-sort
        >
          <template v-slot:items="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.nimi }}</td>
            <td>{{ props.item.osoite }}</td>
            <td>{{ props.item.koordinaatit }}</td>
            <td>{{ props.item.pyynnönlähettäjä }}</td>
            <td>{{ props.item.yritys }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem2(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem2(props.item)">delete</v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="#575756" icon="warning">Ei mittauspaikkoja</v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex class="hidden-sm-and-up">
        <v-data-table
          v-model="selected2"
          :headers="headers2"
          :items="tableFilter2"
          :search="search2"
          item-key="nimi"
          select-all
          class="elevation-1 pt-2"
          :pagination.sync="pagination"
          must-sort
        >
          <template v-slot:items="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td hidden>{{ props.item.nimi }}</td>
            <td>{{ props.item.osoite }}</td>
            <td hidden>{{ props.item.koordinaatit }}</td>
            <td hidden>{{ props.item.pyynnönlähettäjä }}</td>
            <td>{{ props.item.yritys }}</td>
            <td class="justify-center layout px-0">
              <v-menu offset-y>
                <v-btn class="roundbtn" slot="activator" fab dark color="#575756" small>
                  <v-icon>list</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile @click="watchitem2(props.item)">Katsele</v-list-tile>
                  <v-list-tile @click="editItem2(props.item)">Muokkaa</v-list-tile>
                  <v-list-tile @click="deleteItem2(props.item)">Poista</v-list-tile>
                </v-list>
              </v-menu>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="#575756" icon="warning">Ei mittauspaikkoja</v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <div class="text-xs-right pt-2">
      <v-btn dark color="#00abdb" @click="deletechosen2">Poista valitut</v-btn>
    </div>
  </div>
  </v-container>
</template>

<script>
import "vuetify/dist/vuetify.min.css";
import { mapMutations } from "vuex";
import RequestDialog from "../components/RequestDialog.vue";

export default {
  components: { RequestDialog },
  data: () => ({
    valid: true,
    rownumber: "",
    search: "",
    measurementplaceapplication: "",
    search2: "",
    measurementplace: "",
    dialog: false,
    dialog1v2: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    AddDialog: false,
    ConfirmDialog: false,
    itemtodelete: "",
    index2: "",
    methodvar: "",
    selectedall: "",
    messagetext: "",
    selected: [],
    selected2: [],
    defaultSelected: {
      name: "John",
      last: "Doe"
    },
    pagination: {
      rowsPerPage: 10
    },
    formTitle: "Muokkaa mittauspaikkaa",
    items: [{ title: "Katsele" }, { title: "Muokkaa" }, { title: "Poista" }],
    headers: [
      { text: "Nimi", align: "left", value: "nimi" },
      { text: "Osoite", value: "osoite" },
      { text: "Koordinaatit", value: "koordinaatit" },
      { text: "Pyynnönlähettäjä", value: "pyynnönlähettäjä" },
      { text: "Yritys", value: "yritys" },
      { text: "", value: "", sortable: false }
    ],
    headers2: [
      { text: "Nimi", align: "left", value: "nimi", class: "header_hidden" },
      { text: "Osoite", value: "osoite" },
      { text: "Koordinaatit", value: "koordinaatit", class: "header_hidden" },
      {
        text: "Pyynnönlähettäjä",
        value: "pyynnönlähettäjä",
        class: "header_hidden"
      },
      { text: "Yritys", value: "yritys" },
      { text: "", value: "", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      nimi: "",
      osoite: "",
      koordinaatit: "",
      pyynnönlähettäjä: "",
      yritys: ""
    },
    defaultItem: {
      nimi: "",
      osoite: "",
      koordinaatit: "",
      pyynnönlähettäjä: "",
      yritys: ""
    }
  }),
  computed: {
    //Haetaan mittauspaikkahakemuksien ja mittauspaikkojenden tiedot storesta
    mittauspaikkahakemukset() {
      return this.$store.getters.getApplications;
    },
    mittauspaikat() {
      return this.$store.getters.getPlaces;
    },
    tableFilter() {
      return this.mittauspaikkahakemukset.filter(
        item => item.yritys === this.measurementplaceapplication || "" === this.measurementplaceapplication || "Mittauspaikkahakemukset" === this.measurementplaceapplication
      );
    },
    uniqueNames() {
      let filtered_array = ['Mittauspaikkahakemukset'];
      for (let i = 0; i < this.mittauspaikkahakemukset.length; i++) {
        if (
          filtered_array.indexOf(this.mittauspaikkahakemukset[i].yritys) === -1
        ) {
          filtered_array.push(this.mittauspaikkahakemukset[i].yritys);
        }
      }
      return filtered_array;
    },
    //Kaksi hakukenttää, joten haetaan eri paikoista tiedot.
    tableFilter2() {
      return this.mittauspaikat.filter(
        item =>
          item.yritys === this.measurementplace || "" === this.measurementplace || "Mittauspaikat" === this.measurementplace
      );
    },
    //Ottaa selectiin vain yhden kpl jokaista mittauspaikkaa + "Mittauspaikat": voi valita kaikki yritykset 
    uniqueNames2() {
      let filtered_array = ['Mittauspaikat'];
      for (let i = 0; i < this.mittauspaikat.length; i++) {
        if (filtered_array.indexOf(this.mittauspaikat[i].yritys) === -1) {
          filtered_array.push(this.mittauspaikat[i].yritys);
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
      "DELETE_APPLICATION_MP",
      "DELETE_APPLICATION2_MP",
      "DELETE_CHOSEN_MP",
      "DELETE_CHOSEN2_MP",
      "ACCEPT_CHOSEN_MP",
      "SAVE_MP",
      "SAVE_MP"
    ]),
    //watchitem functioita 2, koska 2 eri datablea: näyttävät eri paikkojen tietoa
    watchitem(item) {
      this.rownumber = item;
      this.editedIndex = this.mittauspaikkahakemukset.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
    },
    watchitem2(item) {
      this.rownumber = item;
      this.editedIndex = this.mittauspaikat.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog3 = true;
    },
    editItem(item) {
      this.editedIndex = this.mittauspaikkahakemukset.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    editItem2(item) {
      this.editedIndex = this.mittauspaikat.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog1v2 = true;
    },
    deleteItem(item) {
      this.index2 = this.mittauspaikkahakemukset.indexOf(item);
      this.ConfirmDialog = true;
      this.methodvar = "1";
      this.itemtodelete = "poistaa tämän hakemuksen?";
      this.dialog2 = false;
    },
    deleteItem2(item) {
      this.index2 = this.mittauspaikat.indexOf(item);
      this.ConfirmDialog = true;
      this.methodvar = "2";
      this.itemtodelete = "poistaa tämän mittauspaikan?";
      this.dialog3 = false;
    },
    /*Methodvarin mukaan mutaatio: Poistetaan hakemus, poistetaan piste, poistetaan valitut hakemukset
     poistetaan valitut pisteet, hyväksytään valitut hakemukset*/
    closeYes(methodvar) {
      if (methodvar == "1") {
        this.DELETE_APPLICATION_MP(this.index2);
        this.dialog4 = true;
      } else if (methodvar == "2") {
        this.DELETE_APPLICATION2_MP(this.index2);
        this.dialog4 = true;
      } else if (methodvar == "3") {
        this.DELETE_CHOSEN_MP(this.selectedall);
      } else if (methodvar == "4") {
        this.DELETE_CHOSEN2_MP(this.selectedall);
      } else if (methodvar == "5") {
        this.ACCEPT_CHOSEN_MP(this.selectedall);
      }
      this.ConfirmDialog = false;
    },
    deletechosen() {
      this.ConfirmDialog = true;
      this.methodvar = "3";
      this.itemtodelete = "poistaa kyseiset mittauspaikkahakemukset?";
      this.selectedall = { key1: this.selected.length, key2: this.selected };
    },
    deletechosen2() {
      this.ConfirmDialog = true;
      this.methodvar = "4";
      this.itemtodelete = "poistaa kyseiset mittauspaikat?";
      this.selectedall = { key1: this.selected2.length, key2: this.selected2 };
    },
    acceptchosen() {
      this.ConfirmDialog = true;
      this.methodvar = "5";
      this.itemtodelete = "hyväksyä kyseiset mittauspaikkahakemukset?";
      this.selectedall = { key1: this.selected.length, key2: this.selected };
    },
    //Lähetetään käyttäjälle viesti, miksi hakemus hylättiin
    send() {
      this.dialog4 = false;
      this.messagetext = "";
    },
    close() {
      this.dialog = false;
      this.dialog1v2 = false;
      this.dialog2 = false;
      this.dialog3 = false;
      this.AddDialog = false;
      this.$refs.dialog2form.resetValidation()
      this.$refs.adddialogform.resetValidation()
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 20);
    },
    close2() {
      this.dialog4 = false;
      this.ConfirmDialog = false;
      this.messagetext = "";
    },
    save() {
      if (this.$refs.adddialogform.validate()) {
        if (this.editedIndex > -1) {
          Object.assign(
            this.mittauspaikkahakemukset[this.editedIndex],
            this.editedItem
          );
        } else {
          this.SAVE_MP(this.editedItem);
        }
        this.close();
        this.$refs.adddialogform.resetValidation()
        this.AddDialog = false;
      }
    },
    save2() {
      if (this.$refs.dialog2form.validate()) {
        if (this.editedIndex > -1) {
          Object.assign(this.mittauspaikat[this.editedIndex], this.editedItem);
        } else {
          this.SAVE_MP(this.editedItem);
        }
        this.close();
        this.$refs.dialog2form.resetValidation()
      }
    }
  }
};
</script>
<style scoped>
.my-text-style >>> .v-label {
  color: white;
}
</style>
