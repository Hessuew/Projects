<template>
  <v-app>
    <v-autocomplete
      v-model="choosedCityValue"
      :items="stationValues"
      :search-input.sync="searchValue"
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
    ></v-autocomplete>
  </v-app>
</template>

<script>
export default {
  props: ["choosedCity", "stations", "search"],
   computed: {
             choosedCityValue: {
            get: function() {
                return this.choosedCity
            },
            set: function(newValue){
                this.$emit('update:choosedCity', newValue)
            }   
        },
        stationValues: {
            get: function() {
                return this.stations
            },
            set: function(newValue){
                this.$emit('update:stations', newValue)
            }   
        },
        searchValue: {
          get: function() {
                return this.search
            },
            set: function(newValue){
                this.$emit('update:search', newValue)
            }   
        }
   }
};
</script>