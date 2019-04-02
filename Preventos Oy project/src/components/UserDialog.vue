<template>
  <div>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="inputRules" required :disabled=isDisabled v-model="editedItem.tunnus" label="Tunnus"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="inputRules" required :disabled=isDisabled v-model="editedItem.etunimi" label="Etunimi"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="inputRules" required :disabled=isDisabled v-model="editedItem.sukunimi" label="Sukunimi"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field :rules="emailRules" required :disabled=isDisabled v-model="editedItem.sähköposti" label="Sähköposti"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :mask="mask" :rules="inputRules" required :disabled=isDisabled v-model="editedItem.puhelinnro" label="Puhelinnro"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="inputRules" required :disabled=isDisabled v-model="editedItem.yritys" label="Yritys"></v-text-field>
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
  data(){
    return {
      //Kenttien validointi: eivät saa olla tyhjiä, maks merkki määrä ja spostin muoto
      inputRules: [ v => !!v || 'Täytettävä kenttä',
        v => v.length >= 3 || 'Min 3 merkkiä',
        v => (v && v.length <= 20) || 'Maks 20 merkkiä'
      ],
      emailRules: [
        v => !!v || 'Sähköposti vaaditaan',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Anna oikeassa muodossa'
      ],
      mask: '###-#######'
    }
  }
};
</script>