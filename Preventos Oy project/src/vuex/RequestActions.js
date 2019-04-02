const state = {
    mittauspaikkahakemukset: [
        {
          nimi: "Suonperä",
          osoite:"Suonperäntie1",
          koordinaatit:"N 60° 10,170′ E 024° 57,135′",
          pyynnönlähettäjä:"Make Tuukka",
          yritys:"Uef"
        },
        {
          nimi: "Technopolislaboratoria",
          osoite:"Microkatu 1",
          koordinaatit:"N 60° 10′ 10,2 E 024° 57′ 8,1”a",
          pyynnönlähettäjä:"Kaaleppi Tukka",
          yritys:"Uef"
        },
        {
          nimi: "Lähioja",
          osoite:"Rimpitie 4",
          koordinaatit:"N 60,1695° E 24,95225°",
          pyynnönlähettäjä:"Rosa Tukka",
          yritys:"Atell"
        },
        {
          nimi: "Kurjenmutkan mittaamo",
          osoite:"Kurjenmutka 5",
          koordinaatit:"1°24'12.2'N 2°10'26.5'E",
          pyynnönlähettäjä:"Janne Sukka",
          yritys:"Savonia"
        },
        {
          nimi: "Savonian vedenmittaamo",
          osoite:"Opistotie 4",
          koordinaatit:" 41 24.2028, 2 10.4418",
          pyynnönlähettäjä:"Tomi Tukka",
          yritys:"Uef"
        },
        {
          nimi: "Savonian technopolis",
          osoite:"Microtie 5",
          koordinaatit:"41.40338, 2.17403",
          pyynnönlähettäjä:"Heli Makkonen",
          yritys:"Savonia"
        },
      ],
      mittauspaikat: [
        {
          nimi: "Karupaikka",
          osoite:"Karjalankatu",
          koordinaatit:"N 20° 10,170′ E 024° 57,135′",
          pyynnönlähettäjä:"Make Tuukka",
          yritys:"Uef"
        },
        {
          nimi: "Technopolislaboratoria2",
          osoite:"Microkatu 1",
          koordinaatit:"N 53° 10′ 10,2 E 024° 57′ 8,1”a",
          pyynnönlähettäjä:"Kaaleppi Tukka",
          yritys:"Uef"
        },
        {
          nimi: "Savonian ydinmittaamo",
          osoite:"Rimpitie 66",
          koordinaatit:"N 70,1695° E 24,95225°",
          pyynnönlähettäjä:"Rosa Tukka",
          yritys:"Savonia"
        },
        {
          nimi: "Vedenmittaamo",
          osoite:"Kurjenmutka 2",
          koordinaatit:"1°24'12.2'N 2°10'26.5'E",
          pyynnönlähettäjä:"Janne Sukka",
          yritys:"Unicef"
        },
      ]
  }

  export default {
    state: { ...state },
    //Mittauspaikkahakemuksien ja mittauspaikkojen haku

    getters: {
      getApplications: state => state.mittauspaikkahakemukset,
      getPlaces: state => state.mittauspaikat
    },
    mutations: {
      //Mittauspaikkahakemuksen poisto
      DELETE_APPLICATION_MP(state, index) {
        state.mittauspaikkahakemukset.splice(index, 1)
      },
      //Mittauspaikkahakemuksien massa poisto
      DELETE_CHOSEN_MP(state, selectedall){
        for(let i = 0; i <selectedall.key1; i++){
          const index = state.mittauspaikkahakemukset.indexOf(selectedall.key2[i]);
          state.mittauspaikkahakemukset.splice(index, 1);
        }
      },
      //Mittauspaikkahakemuksien massa hyväksyminen
      ACCEPT_CHOSEN_MP(state, selectedall){
        for(let i = 0; i <selectedall.key1; i++){
          state.mittauspaikat.push(selectedall.key2[i]);
          const index = state.mittauspaikkahakemukset.indexOf(selectedall.key2[i]);
          state.mittauspaikkahakemukset.splice(index, 1);
        }
      },
      //Mittauspaikkahakemuksen lisääminen/ muokkaaminen
      SAVE_MP(state, editedItem) {
        state.mittauspaikkahakemukset.push(editedItem)
      },
      //Mittauspaikkan poisto
      DELETE_APPLICATION2_MP(state, index) {
        state.mittauspaikat.splice(index, 1)
      },
      //Mittauspaikkan massa poisto
      DELETE_CHOSEN2_MP(state, selectedall){
        for(let i = 0; i <selectedall.key1; i++){
          const index = state.mittauspaikat.indexOf(selectedall.key2[i]);
          state.mittauspaikat.splice(index, 1);
        }
      },
      //Mittauspaikkan muokkaus
      SAVE2_MP(state, editedItem) {
        state.mittauspaikat.push(editedItem)
      }
    }
  }