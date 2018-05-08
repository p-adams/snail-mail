<template>
  <div id="app">
    <v-app dark>
      <the-email-control-panel/>
      <v-container grid-list-lg text-xs-center>
        <v-layout>
          <v-flex>
          <router-view/>
          </v-flex>
        </v-layout>
       </v-container>
    </v-app>
  </div>
</template>

<script>
import TheEmailControlPanel from "./components/TheEmailControlPanel";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    TheEmailControlPanel
  },
  computed: {
    ...mapGetters(["isUserAuthenticated"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
