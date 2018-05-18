<template>
  <the-entry-form>
    <span slot="title">Login</span>
    <v-text-field/>
    <v-text-field/>
    <div slot="buttons">
      <v-btn>Cancel</v-btn>
      <v-btn>Login</v-btn>
    </div>
  </the-entry-form>
</template>
<script>
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

