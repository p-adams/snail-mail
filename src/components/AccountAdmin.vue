<template>
    <v-navigation-drawer
        :value="accountAdminVisibility"
        :hide-overlay="true"
        :stateless="true"
        temporary
        dark
        absolute
        right
    >
        <v-list>
            <v-icon
                class="dismissNavDrawerIcon"
                @click="toggleAccountAdminVisibility()"
            >fas fa-times</v-icon>
            <v-list-tile>
                <v-list-tile-title>
                    {{ authenticatedUser.username }}
                </v-list-tile-title>
            </v-list-tile>
        </v-list>
        <v-list>
            <v-divider light></v-divider>
            <v-list-tile
                v-for="accountContent in accountContentList"
                :key="accountContent.content"
                >
                <v-list-tile-content>
                    {{ accountContent.content }}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      accountContentList: [
        { content: "Sign out", action: () => this.signOut() }
      ]
    };
  },
  methods: { ...mapActions(["toggleAccountAdminVisibility"]) },
  computed: {
    ...mapGetters(["authenticatedUser", "accountAdminVisibility"])
  }
};
</script>
<style scoped>
.dismissNavDrawerIcon {
  float: right;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
