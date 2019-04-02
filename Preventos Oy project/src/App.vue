<template>
  <div id="app">
    <div v-if="isLogged()">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  methods: {
    isLogged() {
      if (
        sessionStorage.getItem("logged") != null &&
        JSON.parse(sessionStorage.getItem("logged")).user.logged === true
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  font-family: 'Montserrat', sans-serif;
  min-height: 100%;
  width: 100%;
}
#nav {
  text-align: center;
}
</style>
