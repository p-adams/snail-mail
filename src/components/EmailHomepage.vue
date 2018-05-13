<template>
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
</template>
<script>
import { mapGetters } from "vuex";
import EmailComposer from "./EmailComposer";
import EmailReader from "./EmailReader";
import InboxDisplay from "./InboxDisplay";
import ThePendingEmailStatusPanel from "./ThePendingEmailStatusPanel";
export default {
  name: "EmailHomepage",
  components: {
    EmailComposer,
    EmailReader,
    InboxDisplay,
    ThePendingEmailStatusPanel
  },
  computed: { ...mapGetters(["getSelectedEmailAction"]) }
};
</script>

<style scoped>

</style>
