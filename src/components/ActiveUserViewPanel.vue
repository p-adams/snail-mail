<template>
  <v-toolbar-items class="toolbar-items">
    <v-btn
      flat>Compose</v-btn>
    <v-btn
      flat>Trash</v-btn>
    <v-avatar
      class="avatar"
      @click="toggleAccountAdminVisibility"
      color="amber"
    >
      <span class="white--text headline">
        {{ firstCharOfUsername }}
      </span>
    </v-avatar>
  </v-toolbar-items>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: { ...mapActions(["toggleAccountAdminVisibility"]) },
  computed: {
    ...mapGetters(["authenticatedUser"]),
    firstCharOfUsername() {
      return this.authenticatedUser.username.charAt(0);
    }
  }
};
</script>
<style>
.avatar {
  margin-top: 5px;
  cursor: pointer;
}
</style>



