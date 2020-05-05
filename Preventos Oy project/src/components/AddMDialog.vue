<template>
  <div>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-select v-model="editedItem.tyyppi" :items="options" :disabled=isDisabled :rules="inputRules"></v-select>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field type="number" :rules="inputRules" :disabled=isDisabled v-model="editedItem.tulos" label="Tulos"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field :disabled=isDisabled slot="activator" :rules="inputRules"
              :value="formattedDate" clearable label="Päiväys" prepend-icon="date_range" readonly>
            </v-text-field>
            <v-date-picker v-model="editedItem.paivays" @change="menu = false"></v-date-picker>
          </v-menu>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field :rules="inputRules" :disabled=isDisabled v-model="editedItem.paikka" label="Paikka"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field type="time" :rules="inputRules" :disabled=isDisabled v-model="editedItem.aika" label="Aika"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field :disabled=isDisabled v-model="editedItem.testi" label="Testi"></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-textarea counter="500" maxlength="500" clearable :disabled=isDisabled v-model="editedItem.lisatietoja" label="Lisätietoja"></v-textarea >
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot></slot>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  //Tarvittavat tiedot tuodaan parentista: muuttujat, dialogin otsikko, kentän mahdollinen disaplointi
  props: ["editedItem", "formTitle", 'isDisabled'],
  data: function () {
    return {
      menu: false,
      date: null,
      options: [
        { text: "Lämpötila (°C)",value: "Lämpötila (°C)" },
        { text: "pH (0-14)",value: "pH (0-14)" },
        { text: "Redox (mV)",value: "Redox (mV)" },
        { text: "Sähkönjohtavuus (μS/cm)",value: "Sähkönjohtavuus (μS/cm)" },
        { text: "Sameus (NTU)",value: "Sameus (NTU)" },
        { text: "Suolaisuus (0 to 70 ppt)",value: "Suolaisuus (0 to 70 ppt)" },
        { text: "UV abs",value: "UV abs" },
        { text: "Escherichia coli (pmy/100 ml)",value: "Escherichia coli (pmy/100 ml)" },
        { text: "Heterotrofinen pesäkelukumäärä (R2A-menetelmä)",value: "Heterotrofinen pesäkelukumäärä (R2A-menetelmä)" },
        { text: "Sulfiittia pelkistävien klostridien itiöt",value: "Sulfiittia pelkistävien klostridien itiöt" },
        { text: "Somaattiset kolifaagit",value: "Somaattiset kolifaagit" },
        { text: "Suolistoperäiset enterokokit (pmy/100 ml)",value: "Suolistoperäiset enterokokit (pmy/100 ml)" },
        { text: "F-spesifiset kolifaagit",value: "F-spesifiset kolifaagit" },
        { text: "TOC (mgC/l)",value: "TOC (mgC/l)" },
        { text: "Kokonais fosfori (mg/l)",value: "Kokonais fosfori (mg/l)" },
        { text: "Fe (ug/l)",value: "Fe (ug/l)" },
        { text: "Mn (ug/l)",value: "Mn (ug/l)" },
      ],
      inputRules: [ v => !!v || 'Täytettävä kenttä' ],
    }
  },
  computed: {
    //Tarkistetaan onko pvm kentän tieto tyhjä ja jos on niin asetetaan-> null
    formattedDate () {
      return this.editedItem.paivays === '' ?  this.date : this.editedItem.paivays ;
    }
  }
};
</script>
