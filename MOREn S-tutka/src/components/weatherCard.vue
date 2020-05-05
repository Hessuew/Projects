<template>
  <v-app>
    <v-flex
      v-show="(city == weather.city || city == 'Kaikki kaupungit' || city == '')"
      fill-height
      xs10
      offset-xs1
      offset-lg3
      v-for="weather in allWeathers"
      :key="weather.id"
    >
      <v-card outlined>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 cityNameText">{{ weather.city }}</v-list-item-title>
            <v-list-item-subtitle class="mediumTextGrey">{{ weather.weatherDescription}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title class="tempText alignItemsCenter">
              <img class="imgScaling" :src="weather.icon" />
              <span>{{ weather.temp}}</span>
            </v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-subtitle class="mediumTextBlack">{{ weather.date}}</v-list-item-subtitle>
            <v-list-item-subtitle class="mediumTextGrey">{{ weather.time}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-subtitle class="mediumTextGrey">{{ weather.windSpeed}}</v-list-item-subtitle>
            <v-list-item-subtitle class="mediumTextGrey">{{ weather.humidity}}</v-list-item-subtitle>
            <v-list-item-subtitle
              class="mediumTextGrey"
            >{{ weather.precipitation }}{{ weather.hourlyWeather[0].precipitation}}</v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
      </v-card>
      <v-layout row nowrap>
        <v-flex
          style="width: 20%; padding: 10pt 5pt 30pt 0;"
          v-for="hWeather in weather.hourlyWeather"
          :key="hWeather.id"
        >
          <v-card outlined class="text-center">
            <v-card-text class="customizedPadding">
              <v-list-item two-line class="customizedPadding">
                <v-list-item-content class="imgToCenter" >
                  <v-list-item-subtitle class="mediumTextGrey">{{ hWeather.time}}</v-list-item-subtitle>
                  <img class="smallImgScaling" :src="hWeather.icon" />
                  <v-list-item-subtitle class="mediumTextBlack">{{ hWeather.temp}}</v-list-item-subtitle>
                  <v-flex class="backgroundColorBlue" px-0>
                    <v-list-item-subtitle class="smallTextGrey">{{ hWeather.windSpeed}}</v-list-item-subtitle>
                    <v-list-item-subtitle class="smallTextGrey">{{ hWeather.humidity}}</v-list-item-subtitle>
                    <v-list-item-subtitle class="smallTextGrey">{{ hWeather.precipitation}}</v-list-item-subtitle>
                  </v-flex>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-app>
</template>
<script>
export default {
  props: ["allWeathers", "city"]
};
</script>
