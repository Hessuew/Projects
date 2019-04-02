<template>
  <div id="login">
    <h1>Tämä on kirjautumissivu</h1>
    <b-button v-on:click="login">Kirjaudu</b-button>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login: function() {
      // Väliaikainen kirjautumis DEMO!
      sessionStorage.setItem(
        "logged",
        JSON.stringify({ user: { logged: true } })
      );
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
