<template>
  <v-card>
    <email-composer v-if="getSelectedEmailAction ==='compose'"/>
    <email-reader v-else-if="getSelectedEmailAction ==='read'"/>
    <!-- some logo here -->
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
import EmailComposer from "./EmailComposer";
import EmailReader from "./EmailReader";
export default {
  name: "MainEmailActivityContainer",
  components: { EmailComposer, EmailReader },
  computed: { ...mapGetters(["getSelectedEmailAction"]) }
};
</script>

<style scoped>

</style>
