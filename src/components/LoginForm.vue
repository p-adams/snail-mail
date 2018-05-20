<template>
  <the-entry-form>
    <span slot="title">Login</span>
    <v-text-field
      v-model="user.username"
      placeholder="Enter email"
    />
    <v-text-field
      v-model="user.password"
      placeholder="Enter password"
    />
    <div slot="buttons">
      <v-btn @click="() => this.$router.push('/home')">Cancel</v-btn>
      <v-btn
        @click="handleLogin"
        :disabled="!isFormCompleted">Login</v-btn>
    </div>
  </the-entry-form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TheEntryForm from "./TheEntryForm";
export default {
  components: {
    TheEntryForm
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
    handleLogin() {
      this.proceedText = "Authenticating...";
      this.authenticateUser(this.user).then(() => {
        // if user provided valid name and password
        // load emails and direct user to their email homepage
        if (this.isUserAuthenticated) {
          this.loadUserInbox(this.authenticatedUser);
          this.$router.push("/email-homepage");
        } else {
          if (this.showErrorPage) {
            this.$router.push("/error");
          } else {
            this.proceedText = "Authenticate";
          }
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
      "isUserAuthenticated",
      "showErrorPage"
    ]),
    isFormCompleted() {
      return this.user.username.length > 0 && this.user.password.length > 0;
    }
  }
};
</script>

