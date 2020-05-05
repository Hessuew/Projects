<template>
<!--Asetetaan valkoinen tausta kaikelle ja taustakuva-->
<v-container class=" img-banner"  fluid>
    <!--Käytetään valmista dialog komponenttia, mutta asetetaan eri toiminnallisia nappeja-->
    <!--Maksimi leveys, ei sulkeudu muualta klikkaamalla, toimii esc ja enter näppäimillä-->
    <v-dialog
      v-model="dialog"
      max-width="500px"
      persistent
      @keydown.esc="close()"
      @keydown.enter="save()"
    >
      <v-form ref="dialogform" v-model="valid" lazy-validation>
        <v-card>
          <UserDialog :editedItem="editedItem" :formTitle="formTitle">
            <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
            <v-btn color="#005479" flat @click="save">Tallenna</v-btn>
          </UserDialog>
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
        <UserDialog :editedItem="editedItem" :formTitle="formTitle" :isDisabled="true">
          <v-layout row wrap>
          <v-btn color="#005479" flat @click="close">Peruuta</v-btn>
          <v-btn color="#005479" flat @click="editItem(rownumber)">Muokkaa</v-btn>
          <v-btn color="#005479" flat @click="deleteItem(rownumber)">Poista</v-btn>
          </v-layout>
        </UserDialog>
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
        <v-card-title class="headline">Haluatko varmasti poistaa {{ itemtodelete }} </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#005479" flat @click="close">Ei</v-btn>
          <v-btn color="#005479" flat @click="closeYes(methodvar)">Kyllä</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <div class="img-bannercontent">
  <p class="header">Käyttäjät</p>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 sm5 md4 lg3 class="pr-3 pl-3 text-xs-right">
        <v-btn color="#00abdb" dark @click="dialog=true">Lisää käyttäjä</v-btn>
        <v-text-field class='my-text-style' dark color="white" v-model="search" append-icon="haku" label="Search" single-line hide-details></v-text-field>
        <v-select class='my-text-style' dark color="white" v-model="searchcompany" :items="uniqueNames" ></v-select>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex class="hidden-xs-only">
        <!--Tietokone näkymän datatable:kaikki kentät näkyvät-->
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="tableFilter"
          :search="search"
          item-key="tunnus"
          select-all
          class="elevation-1"
          :pagination.sync="pagination"
          must-sort
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.tunnus }}</td>
            <td>{{ props.item.etunimi }}</td>
            <td>{{ props.item.sukunimi }}</td>
            <td>{{ props.item.sähköposti }}</td>
            <td>{{ props.item.puhelinnro }}</td>
            <td>{{ props.item.yritys }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon small @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="#575756" icon="warning">Ei käyttäjiä</v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="hidden-sm-and-up">
        <!--puhelin näkymän datatable:valitut kentät näkyvät + menu button-->
        <v-data-table
          v-model="selected"
          :headers="headers2"
          :items="tableFilter"
          :search="search"
          item-key="tunnus"
          select-all
          class="elevation-1"
          :pagination.sync="pagination"
          must-sort
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-checkbox color="#00abdb" v-model="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.tunnus }}</td>
            <td>{{ props.item.etunimi }}</td>
            <td>{{ props.item.sukunimi }}</td>
            <td hidden>{{ props.item.sähköposti }}</td>
            <td hidden>{{ props.item.puhelinnro }}</td>
            <td hidden>{{ props.item.yritys }}</td>
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
            <v-alert :value="true" color="#575756" icon="warning">Ei käyttäjiä</v-alert>
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
import "vuetify/dist/vuetify.min.css";
import { mapMutations } from "vuex";
import UserDialog from "../components/UserDialog.vue";

export default {
  components: { UserDialog },
  data: () => ({
    valid: true,
    rownumber: "",
    dialog: false,
    dialog2: false,
    ConfirmDialog: false,
    search: "",
    searchcompany: "",
    index2: "",
    itemtodelete: "",
    methodvar: "",
    selectedall: "",
    selected: [],
    pagination: {
      rowsPerPage: 10
    },
    items: [{ title: "Katsele" }, { title: "Muokkaa" }, { title: "Poista" }],
    headers: [
      {
        text: "Tunnus",
        align: "left",
        sortable: false,
        value: "tunnus"
      },
      { text: "Etunimi", value: "etunimi" },
      { text: "Sukunimi", value: "sukunimi" },
      { text: "Sähköposti", value: "sähköposti" },
      { text: "Puhelinnro", value: "puhelinnro" },
      { text: "Yritys", value: "yritys" },
      { text: "", value: "", sortable: false }
    ],
    headers2: [
      {
        text: "Tunnus",
        align: "left",
        sortable: false,
        value: "tunnus"
      },
      { text: "Etunimi", value: "etunimi" },
      { text: "Sukunimi", value: "sukunimi" },
      { text: "Sähköposti", value: "sähköposti", class: "header_hidden" },
      { text: "Puhelinnro", value: "puhelinnro", class: "header_hidden" },
      { text: "Yritys", value: "yritys", class: "header_hidden" },
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
    //Haetaan käyttäjien tiedot storesta
    tunnukset() {
      return this.$store.getters.getUsers;
    },
    //Lisää/muokkaa dialogin otsikko tilanteen mukaan
    formTitle() {
      return this.editedIndex === -1 ? "Lisää käyttäjä" : "Muokkaa käyttäjää";
    },
    //Taulun haku selectin kautta: tietty yritys, alkuasetelma, valitaan yritykset jolloin kaikki yritykset näkyvät jälleen
    tableFilter() {
      return this.tunnukset.filter(
        item => item.yritys === this.searchcompany || "" === this.searchcompany || "Yritykset" === this.searchcompany
      );
    },
    //Ottaa selectiin vain yhden kpl jokaista yritystä + "Yritykset": voi valita kaikki yritykset 
    uniqueNames: function() {
      let filtered_array = ['Yritykset'];
      for (let i = 0; i < this.tunnukset.length; i++) {
        if (filtered_array.indexOf(this.tunnukset[i].yritys) === -1) {
          filtered_array.push(this.tunnukset[i].yritys);
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
    //Haetaan storen mutaatiot: muuttavat storen state tietoa
    ...mapMutations(["DELETE_USER", "SAVE_USER", "DELETE_CHOSEN_U"]),
    //Ottaa tietyn itemin tiedot hetkelliseen säilöön, josta ne näytetään dialogissa. Dialog avautuu 
    editItem(item) {
      this.editedIndex = this.tunnukset.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    //Otetaan poistettavan tunnuksen tiedot ja määritellään muuttujat, jotka ohjaavat, mitä mutationia käytetään, ja avataan poisto dialogi
    deleteItem(item) {
      this.index2 = this.tunnukset.indexOf(item);
      this.methodvar = "1";
      this.itemtodelete = "tämän mittaustuloksen?";
      this.ConfirmDialog = true;
      this.dialog2 = false;
    },
    //Otetaan poistettavien tunnusten tiedot ja määritellään muuttujat, jotka ohjaavat, mitä mutationia käytetään, ja avataan poisto dialogi
    deletechosen() {
      this.ConfirmDialog = true;
      this.methodvar = "2";
      this.itemtodelete = "poistaa kyseiset mittaustulokset?";
      this.selectedall = { key1: this.selected.length, key2: this.selected };
    },
    //Tiedon lisäys/muokkaus: Tarkistetaan ovatko kentät valideja, kutsutaan mutationia, suljetaan ja resetoidaan validointi
    save() {
      if (this.$refs.dialogform.validate()) {
        if (this.editedIndex > -1) {
          Object.assign(this.tunnukset[this.editedIndex], this.editedItem);
        } else {
          this.SAVE_USER(this.editedItem);
        }
        this.close();
        this.$refs.dialogform.resetValidation()
      }
    },
    //Kännykkä näkymässä katsellaan tunnusta: ottaa tietyn itemin tiedot hetkelliseen säilöön, josta ne näytetään dialogissa. Dialog avautuu
    watchitem(item) {
      this.rownumber = item;
      this.editedIndex = this.tunnukset.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog2 = true;
    },
    //Suljetaan käytettävä dialogi ja asetetaan hetkellisen tiedon säilytys paikat aloitus arvoihin
    close() {
      this.dialog = false;
      this.dialog2 = false;
      this.ConfirmDialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 20);
    },
    //Hyväksymisdialogin hyväksyminen: Tehdään annetun methodvarin pohjalta tietty mutaatio.
    closeYes(methodvar) {
      if (methodvar == "1") {
        this.DELETE_USER(this.index2);
      } else if (methodvar == "2") {
        this.DELETE_CHOSEN_U(this.selectedall);
      }
      this.ConfirmDialog = false;
    }
  }
};
</script>
<style>
/*Navbarin alle jäi pieni harmaa alue, ja tämä poistaa sen */
@media screen and (max-width: 600px) {
  .backgroundtowhite {
    padding-top: 1px;
  }
}
</style>
<style>
/*Kännykkä näkymässä laitetaan valitut otsikot piiloon */
.header_hidden {
  display: none;
}
/*Taustakuvan käyttöön otto ja säätö kokonäytön kokoiseksi*/
.img-banner{
  background: url('../components/preventos_banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 831px;
  background-position: center;
}
/*Vain taustakuva on kokonäytön, muut vähän pienempiä*/
.img-bannercontent{
  margin: 0 3% 0 2%;
  width: 95%;
}
/*Headereiden tyyli*/
.header{
  font-size: 45px;
  font-weight: bold;
  color: white;
}
/*Buttonien reunojen pyöristys*/
.v-btn{
  border-radius: 7px;
}
/*Kännykkä näkymässä buttonit datatablen rivin päädyssä täysin pyöreiksi*/
.roundbtn{
  border-radius: 20px;
}
/*Headerien koon skaalautuminen ja taustakuvan koon korkeuden pienentäminen*/
@media screen and (max-width: 590px) {
  .header {
    font-size: 7vw;
  }
  .img-banner{
    min-height: 425px;
  }
}
</style>
<style scoped>
/*Haku kentän "Haku" teksti valkoiseksi*/
.my-text-style >>> .v-label {
  color: white;
}
</style>
