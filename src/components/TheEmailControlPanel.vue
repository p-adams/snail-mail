<template>
  <v-toolbar>
    <v-toolbar-title class="title">Snail Mail</v-toolbar-title>
    <v-spacer></v-spacer>
    <active-user-view-panel v-if="isUserAuthenticated"/>
    <registration-view-panel v-else/>
    <!--
    <div v-if="!isUserAuthenticated">
      <v-btn
        @click.native.stop="entryFormIsOpen = true"
        flat
      >Sign in
      </v-btn>
      <the-entry-form :is-open.sync="entryFormIsOpen"/>
    </div>
    <div v-else>
      <v-btn
        @click.native.stop="signOutOfAccount()">
        Sign out
      </v-btn>
      <span>{{ welcomeMessage }}</span>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        @click="setSelectedEmailAction({action: 'compose'})"
        flat>Compose</v-btn>
      <v-btn
        @click="deleteEmail"
        :disabled="emailIsNotChecked"
        flat>Trash</v-btn>
    </v-toolbar-items>
    -->
  </v-toolbar>
</template>

<script>
import TheEntryForm from "./TheEntryForm";
import RegistrationViewPanel from "./RegistrationViewPanel";
import ActiveUserViewPanel from "./ActiveUserViewPanel";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheEmailControlPanel",
  components: { ActiveUserViewPanel, TheEntryForm, RegistrationViewPanel },
  data() {
    return {
      entryFormIsOpen: false
    };
  },
  methods: {
    ...mapActions(["deleteEmail", "setSelectedEmailAction", "signOut"]),
    signOutOfAccount() {
      this.signOut();
      this.entryFormIsOpen = false;
    }
  },
  computed: {
    ...mapGetters(["getEmails", "isUserAuthenticated", "authenticatedUser"]),
    emailIsNotChecked() {
      // return (
      // this.getEmails.filter(email => email.checked === true).length === 0
      // );
    },
    welcomeMessage() {
      const formatUsername = username =>
        username.substring(0, username.indexOf("@"));
      return `Hi ${formatUsername(this.authenticatedUser.username)}!`;
    }
  }
};
</script>

<style scoped>
.title {
  color: #009688;
}
</style>
