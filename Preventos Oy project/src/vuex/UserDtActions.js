const state = {
  tunnukset: [
    {
      tunnus: "Mittaaja0.1.0",
      etunimi:"Jukka",
      sukunimi:"Tukka",
      sähköposti:"Jukka.tukka@mail.com",
      puhelinnro:"0400400404",
      yritys:"Uef"
    },
    {
      tunnus: "Mittaaja0.1.1",
      etunimi:"Make",
      sukunimi:"Tuukka",
      sähköposti:"Make.tuukka@mail.com",
      puhelinnro:"0400400405",
      yritys:"Round"
    },
    {
      tunnus: "Mittaaja0.1.2",
      etunimi:"Helga",
      sukunimi:"Hukka",
      sähköposti:"Helga.tukka@mail.com",
      puhelinnro:"0400400406",
      yritys:"Atell"
    },
    {
      tunnus: "Mittaaja0.1.3",
      etunimi:"Rosa",
      sukunimi:"Tukka",
      sähköposti:"Rosa.tukka@mail.com",
      puhelinnro:"0400400407",
      yritys:"Savonia"
    },
    {
      tunnus: "Mittaaja0.1.4",
      etunimi:"Janne",
      sukunimi:"Sukka",
      sähköposti:"Janne.tukka@mail.com",
      puhelinnro:"0400400408",
      yritys:"Uef"
    },
    {
      tunnus: "Mittaaja0.1.5",
      etunimi:"Tomi",
      sukunimi:"Tukka",
      sähköposti:"Tomi.tukka@mail.com",
      puhelinnro:"0400400409",
      yritys:"Savonia"
    },
    {
      tunnus: "Mittaaja0.1.6",
      etunimi:"Kaaleppi",
      sukunimi:"Tukka",
      sähköposti:"Kaaleppi.tukka@mail.com",
      puhelinnro:"0400400401",
      yritys:"Uef"
    }
  ]
}
export default {
  state: { ...state },
  //Otetaan getteriin statin tiedot, jotta voidaan käyttää tarvittaessa
  getters: {
    getUsers: state => state.tunnukset
  },
  mutations: {
    //Käyttäjän poisto
    DELETE_USER(state, index) {
      state.tunnukset.splice(index, 1)
    },
    //Käyttäjän lisäys/muokkaus
    SAVE_USER(state, editedItem) {
      state.tunnukset.push(editedItem)
    },
    //Käyttäjien massa poisto
    DELETE_CHOSEN_U(state, selectedall){
      for(let i = 0; i <selectedall.key1; i++){
        const index = state.tunnukset.indexOf(selectedall.key2[i]);
        state.tunnukset.splice(index, 1);
      }
    },
  }
}