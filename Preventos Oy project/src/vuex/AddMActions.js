const state = {
    mittaustulokset: [
        {
        tyyppi: "Lämpötila (°C)",
        tulos:"15",
        paikka:"Korkeakoski",
        paivays:"2019-03-09",
        aika:"22:22",
        testi:"On",
        lisatietoja: "asd",
        },
        {
          tyyppi: "pH (0-14)",
          tulos:"7",
          paikka:"Korkeakoski3",
          paivays:"2019-03-09",
          aika:"12:22",
          testi:"On myös",
          lisatietoja: "asd",
          }
    ]
  }
  export default {
    state: { ...state },
    //Mittautulosten haku
    getters: {
      getMeasurements: state => state.mittaustulokset
    },
    mutations: {
      //Mittautuloksen poisto
      DELETE_MEASUREMENT(state, index) {
        state.mittaustulokset.splice(index, 1)
      },
      //Mittautuloksen lisäys/muokkaus
      SAVE_MEASUREMENT(state, formData) {
        state.mittaustulokset.push(formData)
      },
      //Mittautulosten massa poisto
      DELETE_CHOSEN_M(state, selectedall){
        for(let i = 0; i <selectedall.key1; i++){
          const index = state.mittaustulokset.indexOf(selectedall.key2[i]);
          state.mittaustulokset.splice(index, 1);
        }
      },
    }
  }