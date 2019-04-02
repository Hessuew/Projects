<template>
  <v-app>
    <v-toolbar absolute app color="#56AF23">
      <v-toolbar-title class="headline white--text">
        <span class="font-weight-light">Aseman junatiedot</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/DtNakyma'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
