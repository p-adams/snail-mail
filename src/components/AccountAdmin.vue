<template>
    <v-navigation-drawer
        :value="accountAdminVisibility"
        temporary
        dark
        absolute
        :hide-overlay="true"
        :stateless="true"
    >
        <v-list>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      accountContentList: [
        { content: "Sign out", action: () => this.signOut() }
      ]
    };
  },
  computed: {
    ...mapGetters(["authenticatedUser", "accountAdminVisibility"])
  }
};
</script>

