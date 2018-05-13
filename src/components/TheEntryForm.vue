<template> 
  <v-card>
    <v-card-title class="headline">Entry form</v-card-title>
    <v-card-text>
    <v-form>
        <v-text-field
            label="username"
            v-model="user.username"
            required
        ></v-text-field>
        <v-text-field
            type="password"
            label="password"
            v-model="user.password"
            required
        ></v-text-field>
    </v-form>
    </v-card-text>
    <v-card-text class="red--text">
      {{ userAuthenticationErrorMessage }}
    </v-card-text>
    <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
        flat="flat"
        @click.native="cancelEntry()"
    >Cancel</v-btn>
    <v-btn
        flat="flat"
        @click="handleEntryFormSubmit"
        :disabled="!isFormCompleted"
    >{{ proceedText }}
    </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheEntryForm",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      user: {
        username: "johnsmith@meow.com",
        password: "meow"
      },
      proceedText: "Authenticate"
    };
  },
  methods: {
    ...mapActions(["authenticateUser", "loadUserInbox"]),
    handleEntryFormSubmit() {
      this.proceedText = "Authenticating...";
      this.authenticateUser(this.user).then(() => {
        // if user provided valid name and password
        // load emails and direct user to their email homepage
        if (this.isUserAuthenticated) {
          // this.$emit("update:isOpen", false);
          this.loadUserInbox(this.authenticatedUser);
        } else {
          this.proceedText = "Authenticate";
        }
      });
    },
    cancelEntry() {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters([
      "authenticatedUser",
      "userAuthenticationErrorMessage",
      "isUserAuthenticated"
    ]),
    isFormCompleted() {
      return this.user.username.length && this.user.password.length;
    }
  }
};
</script>

