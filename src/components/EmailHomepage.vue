<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <inbox-display/>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          reader/composer
        </v-card>
      </v-flex>
    </v-layout>
    <account-admin/>
    <v-card>
      <footer>
        <the-pending-email-status-panel/>
      </footer>
    </v-card>
  </v-container>
    <!--<email-composer v-if="getSelectedEmailAction ==='compose'"/>
    <email-reader v-else-if="getSelectedEmailAction ==='read'"/>-->
    <!-- some logo here -->
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AccountAdmin from "./AccountAdmin";
import EmailComposer from "./EmailComposer";
import EmailReader from "./EmailReader";
import InboxDisplay from "./InboxDisplay";
import ThePendingEmailStatusPanel from "./ThePendingEmailStatusPanel";
export default {
  name: "EmailHomepage",
  components: {
    AccountAdmin,
    EmailComposer,
    EmailReader,
    InboxDisplay,
    ThePendingEmailStatusPanel
  },
  methods: { ...mapActions(["toggleAccountAdminVisibility"]) },
  computed: {
    ...mapGetters(["getSelectedEmailAction", "accountAdminVisibility"])
  }
};
</script>

<style scoped>
</style>
