<template>
  <div id="app">
    <v-app dark>
      <the-email-control-panel/>
      <v-container grid-list-lg text-xs-center>
        <v-layout>
          <v-flex xs4>
            <the-email-inbox-display/>
          </v-flex>
          <v-flex xs8>
          <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
      <footer>
        <the-pending-email-status-panel/>
      </footer>
    </v-app>
  </div>
</template>

<script>
import TheEmailInboxDisplay from "./components/TheEmailInboxDisplay";
import TheEmailControlPanel from "./components/TheEmailControlPanel";
import ThePendingEmailStatusPanel from "./components/ThePendingEmailStatusPanel";
export default {
  name: "App",
  components: {
    TheEmailInboxDisplay,
    TheEmailControlPanel,
    ThePendingEmailStatusPanel
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
