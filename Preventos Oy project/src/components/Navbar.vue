<template>
  <v-app>
    <v-toolbar absolute flat color="white">
      <v-layout row wrap>
      <v-toolbar-title class="pt-4">
        <a href="https://www.preventos.fi/index.html">
          <img class="img" alt="Preventos logo" src="../components/logo.svg">
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--Navbar linkit ja niiden kautta siirtyminen eri näkymiin, näkymisen määrittäminen-->
      <div class="pt-4 hidden-lg-and-down">
      <v-btn class="v-navbutton" flat color="#00abdb" to="/">
        <span>Koti</span>
      </v-btn>
      <v-btn class="v-navbutton" flat color="#00abdb" to="/users">
        <span>Käyttäjien hallinta</span>
      </v-btn>
      <v-btn class="v-navbutton" flat color="#00abdb" to="/add">
        <span>Mittauksen hallinta</span>
      </v-btn>
      <v-btn class="v-navbutton" flat color="#00abdb" to="/request">
        <span>Mittauspisteiden hallinta</span>
      </v-btn>
      <v-btn class="v-navbutton" flat color="#00abdb" v-on:click="logout">
        <span>Kirjaudu ulos</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      </div>
      <!--Menu iconi ja sen näkymisen määrittäminen-->
      <v-toolbar-side-icon class="grey--text text--darken-2 hidden-xl-only" @click="drawer = !drawer">
        <v-icon large >dehaze</v-icon>
      </v-toolbar-side-icon>
      </v-layout>   
    </v-toolbar>

    <v-navigation-drawer right app v-model="drawer" temporary>
      <v-btn flat color="#00abdb" to="/">
        <span>Koti</span>
      </v-btn>
      <v-btn flat color="#00abdb" to="/users">
        <span>Käyttäjien hallinta</span>
      </v-btn>
      <v-btn flat color="#00abdb" to="/add">
        <span>Mittauksen hallinta</span>
      </v-btn>
      <v-btn flat color="#00abdb" to="/request">
        <span>Mittauspisteiden hallinta</span>
      </v-btn>
      <v-btn flat color="#00abdb" v-on:click="logout">
        <span>Kirjaudu ulos</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      drawer: false,
      mediawidth: false
    };
  },
  methods: {
    logout() {
      sessionStorage.setItem(
        // Väliaikainen kirjautumis DEMO!
        "logged",
        JSON.stringify({ user: { logged: false } })
      );
      this.$store.commit("loginToggle");
      this.$router.push("login");
    }
  }
};
</script>

<style scoped>
/*Asetetaan linkkibuttoni lähemmäs toisiaan*/
.v-navbutton{
  margin: 0px; 
}
</style>

<style>
/*Aseteaan wrapin koko: teki itsestään liian ison, joten pakotettiin sopivan kokoiseksi*/
.application--wrap{
  background-color: white;
  min-height: 100% !important;
  padding-top: 53px;
}
/*Logon koko*/
.img {
  max-width: 100%;
  height: auto;
}
/*Menu iconin asettaminen oikealle korkeudelle*/
.v-toolbar__side-icon{
  margin-top: 30px !important;
}
/*Navbarin oikea asettuminen pienemmillä näytöillä*/
@media screen and (max-width: 427px) {
  .v-toolbar__title{
    size: 7vw;
  }
  .application--wrap{
    padding-top: 70px;
}
  .img-banner{
    min-height: 425px;
  }
}
/*Logon skaalaus ja menuiconin asettuminen*/
@media screen and (max-width: 410px) {
  .v-toolbar__side-icon{
      margin-top: 0px !important;
    }
  .v-toolbar__title{
      margin-top: 32px;
      size: 7vw;
  }
}
</style>
