<template>
  <v-card>
    <h5>Inbox</h5>
    <v-list v-if="emails.length > 0">
      <v-list-tile
          v-for="email in emails"
          :key="email.ID"
          avatar
      >
      <!-- <v-list-tile-action>
        <v-checkbox light></v-checkbox>
      </v-list-tile-action> -->
      <v-list-tile-content
        class="inbox-email"
        @click="openEmail({ID: email.ID})"
      >
        <v-list-tile-title> {{ email.SENDER }}</v-list-tile-title>
        <v-list-tile-sub-title> {{ email.SUBJECT }}</v-list-tile-sub-title>
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
  methods: {
    ...mapActions(["openEmail"])
  },
  computed: {
    ...mapGetters(["emails"])
  }
};
</script>

<style scoped>
.inbox-email {
  cursor: pointer;
}
</style>
