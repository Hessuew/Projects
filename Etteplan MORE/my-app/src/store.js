import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saapuvatjunat: [],
    lahtevatjunat: [],
    asemat: []
  },
  mutations: {
    SET_ARRIVINGTRAINS(state, valittukaupunki){
      axios 
      //Linkki on minusta oikein, kun sen pitäisi hakea asemalle seuraavat 10 saapuvaa junaa
        .get('https://rata.digitraffic.fi/api/v1/live-trains/station/' + valittukaupunki + '?arrived_trains=0&arriving_trains=10&departed_trains=0&departing_trains=0&include_nonstopping=false')
        .then(data =>{
          state.saapuvatjunat = data.data;
          /*Esimerkiksi täällä olisi voinut ottaa kiinni data, muokata se oikeaan järjestykseen 
          ja katsoa missä kohden 'valittukaupunki' on, jotta sinne saapuvan/lähtevän junan oikean ajan olisi voinut näyttää,
          mutten ole tällä tavalla muokannut dataa paljon varsinkaan nested json:sta niin en onnistunut*/    
        })
        .catch( error => {
          console.log(error);
        })
    },
    SET_DEPARTURINGTRAINS(state, valittukaupunki){
      axios 
      .get('https://rata.digitraffic.fi/api/v1/live-trains/station/' + valittukaupunki + '?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=10&include_nonstopping=false')
      .then(data =>{
        state.lahtevatjunat = data.data;
      })
      .catch( error => {
        console.log(error);
      })
      
    },
    SET_STATIONS(state, asemat){
      state.asemat = asemat;
    }
  },
  actions: {
    haeAsemat({commit}){
      axios 
        .get('https://rata.digitraffic.fi/api/v1/metadata/stations')
        .then(data =>{
          let asemat = data.data;
          commit('SET_STATIONS', asemat);
        })
        .catch( error => {
          console.log(error);
        })
    }
  }
});
