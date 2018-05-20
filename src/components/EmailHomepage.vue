<template>
  <v-layout>
    <v-container>
      <v-flex>
        <v-card>
          <v-flex xs4>
            <inbox-display/>
          </v-flex>
        </v-card>
        <v-card>
          <footer>
            <the-pending-email-status-panel/>
          </footer>
        </v-card>
      <!--<email-composer v-if="getSelectedEmailAction ==='compose'"/>
      <email-reader v-else-if="getSelectedEmailAction ==='read'"/>-->
      <!-- some logo here -->
      </v-flex>
    </v-container>
    <account-admin/>
  </v-layout>
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
