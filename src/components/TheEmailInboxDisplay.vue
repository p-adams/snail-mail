<template>
  <v-card>
    <h5>Inbox</h5>
    <v-list v-if="allEmails.length > 0">
      <v-list-tile
          v-for="email in allEmails"
          :key="email.id"
          avatar
      >
      <v-list-tile-action>
        <v-checkbox v-model="email.checked" light></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content
        class="inbox-email"
        @click="openEmail({id: email.id})"
      >
        <v-list-tile-title> {{ email.sender }}</v-list-tile-title>
        <v-list-tile-sub-title> {{ email.recipient }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list>
    <div v-else>
      <p>loading emails...</p>
      <v-progress-circular indeterminate color="purple"></v-progress-circular>
    </div>
  </v-card>  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheEmailInboxDisplay",
  created() {
    this.loadEmails();
  },
  methods: {
    ...mapActions(["loadEmails", "openEmail"])
  },
  computed: {
    ...mapGetters(["getEmails"]),
    allEmails() {
      return this.getEmails.filter(email => email.sender === "john@meow.com");
    }
  }
};
</script>

<style scoped>
.inbox-email {
  cursor: pointer;
}
</style>
