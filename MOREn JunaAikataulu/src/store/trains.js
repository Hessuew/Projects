import Vue from 'vue';
import Vuex from 'vuex';
import store from "@/store";
import { getAllStations, get10ArrivingTrains, get10ADeparturingTrains } from '@/modules/APIconnection';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    arrivingTrains: [],
    departuringTrains: [],
    stations: [],
    choosedCity: '',
    dialogItems: '',
  },
   getters: {
    getStations(state) {
      return state.stations;
    },
    getArrivingTrains(state) {
      return state.arrivingTrains;
    },
    getDeparturingTrains(state) {
      return state.departuringTrains;
    },
    getChoosedCity(state) {
      return state.choosedCity;
    }
  },
  mutations: {
    SET_ARRIVINGTRAINS(state, arrivingTrains) {
      for (let j = 0; j < arrivingTrains.key1.length; j++) {
        let arrivingTrain = { TrainNumbers: arrivingTrains.key1[j], TrainStartStation: arrivingTrains.key2[j], TrainEndStation: arrivingTrains.key3[j], TrainScheduledTime: arrivingTrains.key4[j], TrainActualTime: arrivingTrains.key5[j], TrainCancelled: arrivingTrains.key6[j] };
        state.arrivingTrains.push(arrivingTrain);
      }
    },
    RESET_ARRIVINGTRAINS(state) {
      state.arrivingTrains = [];
    },
    SET_DEPARTURINGTRAINS(state, departuringTrains) {
      for (let j = 0; j < departuringTrains.key1.length; j++) {
        let departuringTrain = { TrainNumbers: departuringTrains.key1[j], TrainStartStation: departuringTrains.key2[j], TrainEndStation: departuringTrains.key3[j], TrainScheduledTime: departuringTrains.key4[j], TrainActualTime: departuringTrains.key5[j], TrainCancelled: departuringTrains.key6[j] };
        state.departuringTrains.push(departuringTrain);
      }
    },
    RESET_DEPARTURINGTRAINS(state) {
      state.departuringTrains = [];
    },
    SET_STATIONS(state, stations) {
      state.stations = stations;
    }
  },
  actions: {
    async fetchStations({ commit }) {
      try {
        const response = await getAllStations();
        commit('SET_STATIONS', response.data);
        store.dispatch("snackbar/setSnackbar", {
          showing: true,
          text: "Stations fecthed successfully"
        });
      } catch (error) {
        this.$store.dispatch("snackbar/setSnackbar", {
          showing: true,
          text: error,
          timeout: 10000,
          color: "error"
        });
        window.console.log(error);
      }
    },
    async fetchArrivingTrains({ commit, state }, choosedCity) {
      if (choosedCity == null)
        commit('RESET_ARRIVINGTRAINS');
      else {
        try {
          const response = await get10ArrivingTrains(choosedCity);
          if (response.length < 1) {
            state.dialogItems = { key1: 'no trains', key2: 'error' };
          } else {
            let aTrainNumbers = response.data.map(v => v.trainNumber);
            let aCommuterTrain = response.data.map(v => v.trainCategory);

            for (let j = 0; j < aTrainNumbers.length; j++) {
              if (aCommuterTrain[j] == 'Commuter')
                aTrainNumbers[j] = 'Commuter train ' + aTrainNumbers[j];
            }
            let aTrainStartStationShort = response.data.map(t => t.timeTableRows[0].stationShortCode);
            let aTrainStartStation = [];
            for (let j = 0; j < aTrainStartStationShort.length; j++) {
              aTrainStartStation[j] = state.stations.filter(i => i.stationShortCode === aTrainStartStationShort[j]).map(t => t.stationName) + ', ';
            }
            let aTrainEndStationShort = response.data.map(t => t.timeTableRows[t.timeTableRows.length - 1].stationShortCode);
            let aTrainEndStation = [];
            for (let j = 0; j < aTrainEndStationShort.length; j++) {
              aTrainEndStation[j] = state.stations.filter(i => i.stationShortCode === aTrainEndStationShort[j]).map(t => t.stationName) + ', ';
            }
            let aTrainCancelled = response.data.map(v => v.cancelled);
            
            let aTrainScheduledTime = [];
            for (let j = 0; j < response.data.length; j++) {
              for (let k = 0; k < response.data[j].timeTableRows.length; k++) {
                if (response.data[j].timeTableRows[k].stationShortCode == choosedCity && response.data[j].timeTableRows[k].type == 'ARRIVAL') {
                  aTrainScheduledTime.push(response.data[j].timeTableRows[k].scheduledTime)
                } 
              }
            }
            let aTrainActualTime = [];
            for (let j = 0; j < response.data.length; j++) {
              for (let k = 0; k < response.data[j].timeTableRows.length; k++) {
                if (response.data[j].timeTableRows[k].stationShortCode == choosedCity && response.data[j].timeTableRows[k].type == 'ARRIVAL' && response.data[j].timeTableRows[k].actualTime != null) {
                  aTrainActualTime.push(response.data[j].timeTableRows[k].actualTime)
                }
              }
            }
            let arrivingTrains = { key1: aTrainNumbers, key2: aTrainStartStation, key3: aTrainEndStation, key4: aTrainScheduledTime, key5: aTrainActualTime, key6: aTrainCancelled };
            commit('SET_ARRIVINGTRAINS', arrivingTrains);
            store.dispatch("snackbar/setSnackbar", {
              showing: true,
              text: "Arriving trains fecthed successfully"
            });
          }
        } catch (error) {
          store.dispatch("snackbar/setSnackbar", {
            showing: true,
            text: error,
            timeout: 10000,
            color: "error"
          });
          window.console.log(error);
        }
      }
    },
    async fetchDeparturingTrains({ commit, state }, choosedCity) {
      if (choosedCity == null)
        commit('RESET_DEPARTURINGTRAINS');
      else {
        try {
          const response = await get10ADeparturingTrains(choosedCity);
          if (response.length < 1) {
            return 'There were not departuring trains';
          } else {
            let dTrainNumbers = response.data.map(v => v.trainNumber);
            let dCommuterTrain = response.data.map(v => v.trainCategory);

            for (let j = 0; j < dTrainNumbers.length; j++) {
              if (dCommuterTrain[j] == 'Commuter')
                dTrainNumbers[j] = 'Commuter train ' + dTrainNumbers[j];
              //response.data.filter(i => i.trainNumber === aTrainNumbers[j].split(' ')[0]).map(v => v.trainNumber)
            }
            let dTrainStartStationShrort = response.data.map(t => t.timeTableRows[0].stationShortCode);
            let dTrainStartStation = [];
            for (let j = 0; j < dTrainStartStationShrort.length; j++) {
              dTrainStartStation[j] = state.stations.filter(i => i.stationShortCode === dTrainStartStationShrort[j]).map(t => t.stationName) + ', ';
            }
            let dTrainEndStationShort = response.data.map(t => t.timeTableRows[t.timeTableRows.length - 1].stationShortCode);
            let dTrainEndStation = [];
            for (let j = 0; j < dTrainEndStationShort.length; j++) {
              dTrainEndStation[j] = state.stations.filter(i => i.stationShortCode === dTrainEndStationShort[j]).map(t => t.stationName) + ', ';
            }
            let dTrainScheduledTime = [];
            for (let j = 0; j < response.data.length; j++) {
              for (let k = 0; k < response.data[j].timeTableRows.length; k++) {
                if (response.data[j].timeTableRows[k].stationShortCode == choosedCity && response.data[j].timeTableRows[k].type == 'DEPARTURE') {
                  dTrainScheduledTime.push(response.data[j].timeTableRows[k].scheduledTime)
                }
              }
            }
            let dTrainActualTime = [];
            for (let j = 0; j < response.data.length; j++) {
              for (let k = 0; k < response.data[j].timeTableRows.length; k++) {
                if (response.data[j].timeTableRows[k].stationShortCode == choosedCity && response.data[j].timeTableRows[k].type == 'DEPARTURE' && response.data[j].timeTableRows[k].actualTime != null) {
                  dTrainActualTime.push(response.data[j].timeTableRows[k].actualTime)
                }
              }
            }
            let dTrainCancelled = response.data.map(v => v.cancelled);
            let departuringTrains = { key1: dTrainNumbers, key2: dTrainStartStation, key3: dTrainEndStation, key4: dTrainScheduledTime, key5: dTrainActualTime, key6: dTrainCancelled };
            commit('SET_DEPARTURINGTRAINS', departuringTrains);
            store.dispatch("snackbar/setSnackbar", {
              showing: true,
              text: "Departuring trains fecthed successfully"
            });
          }
        } catch (error) {
          store.dispatch("snackbar/setSnackbar", {
            showing: true,
            text: error,
            timeout: 10000,
            color: "error"
          });        
          window.console.log(error);
        }
      }
    }
  }
}
/**

                let deletingIndex;
            
            for(let j = 0; j < aTrainNumbers.length; j++){
              if(aTrainStartStationShort[j] == choosedCity && aTrainEndStationShort[j] != choosedCity){
                window.console.log(j + 'po ' + aTrainNumbers[j] + ' ' + aTrainStartStation[j] + ' ' + aTrainEndStation[j])
                deletingIndex = j ;

                window.console.log(aTrainNumbers[deletingIndex]);

                aTrainNumbers.splice(deletingIndex,1);
                aTrainStartStation.splice(deletingIndex,1);
                aTrainStartStationShort.splice(deletingIndex,1);
                aTrainEndStation.splice(deletingIndex,1);
                aTrainEndStationShort.splice(deletingIndex,1);
                aTrainCancelled.splice(deletingIndex,1);
              }
            }


          let aTrainScheduledTime = [];
          for (let j = 0; j < aTrainStartStationShrort.length; j++) {
            for (let k = 0; k < length1[j]; k++) {

              aTrainScheduledTime[j] = response.data.filter(i => i.timeTableRows[j].stationShortCode === choosedCity.toString()  && i.timeTableRows[j].type === 'ARRIVAL').map(t => t.timeTableRows[j].scheduledTime);
              window.console.log(aTrainScheduledTime[j] + '    ' + k);
            }
          }

 */