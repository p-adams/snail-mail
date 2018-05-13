<template>
  <v-toolbar-items>
    <button-wrapper
      buttonTitle="Register"
      :event="showRegistrationForm"
    />
    <button-wrapper
      buttonTitle="Login"
      :event="showLoginForm"
    />
  </v-toolbar-items>
</template>
<script>
import ButtonWrapper from "./ButtonWrapper";
export default {
  components: {
    ButtonWrapper
  },
  methods: {
    showRegistrationForm() {
      this.$router.push({ name: "Registration" });
    },
    showLoginForm() {
      this.$router.push("login");
    }
  }
};
</script>

