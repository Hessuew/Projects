<template>
  <div>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="nameRules" required :disabled=isDisabled v-model="editedItem.nimi" label="Nimi"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="inputRulesLinked" required :disabled=isDisabled v-model="editedItem.osoite" label="Osoite"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field :rules="nameRules" required :disabled=isDisabled v-model="editedItem.pyynnönlähettäjä" label="Pyynnönlähettäjä"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field :rules="inputRules2" :disabled=isDisabled v-model="editedItem.koordinaatit" label="Koordinaatit"></v-text-field>
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
  props: ['editedItem', 'formTitle', 'isDisabled'],
  data (){
    return {
      //Kenttien validointi: eivät saa olla tyhjiä, maks merkki määrä, osoite tai koordinaatit annettu, koordinaattien muoto
      inputRules: [ v => !!v || 'Täytettävä kenttä',
        v => v.length >= 3 || 'Min 3 merkkiä',
        v => (v && v.length <= 20) || 'Maks 20 merkkiä'
      ],
      nameRules:  [
        v => !!v || 'Täytettävä kenttä',
        v => v.length >= 5 || 'Min 5 merkkiä',
        v => (v && v.length <= 30) || 'Maks 30 merkkiä'
      ],
      inputRules2: [ v => !!v || 'Täytä joko osoite tai koordinaatit',
        v => (v && v.length <= 25) || 'Maks 25 merkkiä',
        v => /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(v) || 'Anna muodossa: 12.123123, 12.123123'
      ],
      inputRulesLinked: [ v => !!v || 'Täytä joko osoite tai koordinaatit',
        v => v.length >= 5 || 'Min 5 merkkiä',
        v => (v && v.length <= 20) || 'Maks 20 merkkiä'
      ]
    }
  }
}
</script>